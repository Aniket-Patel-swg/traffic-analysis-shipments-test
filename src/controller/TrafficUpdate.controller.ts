import { Request, Response } from 'express';
import { TrafficUpdate } from '../model/TrafficUpdate.model';
import { ControllerException } from '../exceptions/Controller.exception';

export class TrafficUpdateController {
    static async updateTraffic(req: Request, res: Response) {
        try {
            const { road_id, timestamp, traffic_condition } = req.body;
            const trafficUpdate = new TrafficUpdate({ road_id, timestamp, traffic_condition });
            await trafficUpdate.save();
            res.status(201).json(trafficUpdate);
        } catch (error) {
            throw new ControllerException("error updating traffic", 500);
        }
    }
}