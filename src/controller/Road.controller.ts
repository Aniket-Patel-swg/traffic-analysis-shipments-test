
import { Request, Response } from 'express';
import { Road } from '../model/Road.model';
import { TrafficUpdate } from '../model/TrafficUpdate.model';
import { ControllerException, ValidationException } from '../utils/exceptions/exception';
import { IRoad } from '../model/interfaces/Road.interface';

export class RoadController {
    static async addRoad(req: Request, res: Response) {
        try {
            let { start_location_id, end_location_id, distance, traffic_condition } = req.body;

            if (!start_location_id || !end_location_id || !distance || !traffic_condition) {
                throw new ValidationException("start_location_id, end_location_id, distance, and traffic_condition are required", 400);
            }

            if (traffic_condition == 'clear') {
                traffic_condition = 1;
            } else if (traffic_condition == 'moderate') {
                traffic_condition = 5;
            }
            else if (traffic_condition == 'high') {
                traffic_condition = 10;
            }
            else {
                throw new ValidationException("Invalid traffic condition", 400);
            }

            const road: IRoad = new Road({ start_location_id, end_location_id, distance, traffic_condition });
            await road.save();
            res.status(201).json("Created");
        } catch (error) {
            console.log(error);
            throw new ControllerException("error posting roads", 500);
        }
    }

    static async getTrafficCondition(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const latestUpdate = await TrafficUpdate.findOne({ road_id: id }).sort({ timestamp: -1 });
            res.status(200).json({ traffic_condition: latestUpdate ? latestUpdate.traffic_condition : 'unknown' });
        } catch (error) {

            throw new ControllerException("error getting traffic condition", 500);
        }
    }
}