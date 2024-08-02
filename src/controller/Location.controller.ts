import { Request, Response } from 'express';
import { Location } from '../model/location.model';
import { ControllerException } from '../exceptions/Controller.exception';

export class LocationController {
    static async addLocation(req: Request, res: Response) {
        try {
            const { name, latitude, longitude } = req.body;
            const location = new Location({ name, latitude, longitude });
            await location.save();
            res.status(201).json(location);
        } catch (error: any) {
            throw new ControllerException("error posting location", 500);
        }
    }
}
