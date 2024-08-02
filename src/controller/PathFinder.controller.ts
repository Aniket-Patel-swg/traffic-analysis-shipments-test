import { Request, Response } from 'express';
import { getShortestPath } from '../services/shortestPath.service';
import { ControllerException, ValidationException } from '../utils/exceptions/exception';
import { Road } from '../model/Road.model';

export class PathfindingController {
    static async getShortestPath(req: Request, res: Response) {
        try {
            const { start_location_id, end_location_id } = req.query;

            if (!start_location_id || !end_location_id) {
                throw new ValidationException('start_location_id and end_location_id are required', 400);
            }

            const path = await getShortestPath(start_location_id as string, end_location_id as string);

            if (path) {

                const road = await Road.findOne();
                const total_distance = path.length;

                // TODO: improve this logic
                const estimated_time = path.length * 2 + (road?.traffic_condition === 10 ? 10 : road?.traffic_condition === 5 ? 5 : 1);

                res.status(200).json({ path, total_distance: total_distance, estimated_time: estimated_time });
            } else {
                res.status(404).json({ error: 'Path not found' });
            }
        } catch (error) {
            console.log(error);
            throw new ControllerException("error getting shortest path", 500);
        }
    }
}
