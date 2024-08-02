import { Request, Response } from 'express';
import { Location } from '../model/location.model';
import { ControllerException, ValidationException } from '../utils/exceptions/exception';
import { ILocation } from '../model/interfaces/Location.interface';

export class LocationController {
    static async addLocation(req: Request, res: Response) {
        try {
            const { name, latitude, longitude } = req.body;

            if (!name || !latitude || !longitude) {
                throw new ValidationException("name, latitude, and longitude are required", 400);
            }

            const location: ILocation = new Location({ name, latitude, longitude });
            await location.save();
            res.status(201).json("Created");
        } catch (error: any) {
            throw new ControllerException("error posting location", 500);
        }
    }
}
