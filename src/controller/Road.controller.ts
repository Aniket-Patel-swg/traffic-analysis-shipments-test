
import { Request, Response } from 'express';
import { Road } from '../model/Road.model';
import { TrafficUpdate } from '../model/TrafficUpdate.model';
import { ControllerException } from '../exceptions/Controller.exception';

export class RoadController {
    static async addRoad(req: Request, res: Response) {
        try {
            const { start_location_id, end_location_id, distance, traffic_condition } = req.body;
            const road = new Road({ start_location_id, end_location_id, distance, traffic_condition });
            await road.save();
            res.status(201).json(road);
        } catch (error) {
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