import { Request, Response } from 'express';
import { getShortestPath } from '../services/shortestPath.service';
import { ControllerException } from '../utils/exceptions/exception';

export class PathfindingController {
    static async getShortestPath(req: Request, res: Response) {
        try {
            const { start_location_id, end_location_id } = req.query;
            const path = await getShortestPath(start_location_id as string, end_location_id as string);
            if (path) {
                res.status(200).json({ path, total_distance: path.length, estimated_time: path.length * 2 }); 
            } else {
                res.status(404).json({ error: 'Path not found' });
            }
        } catch (error) {
            throw new ControllerException("error updating traffic", 500);
        }
    }
}
