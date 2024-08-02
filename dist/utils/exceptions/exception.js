"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerException = exports.ValidationException = void 0;
class ValidationException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
        this.name = "ValidationException";
    }
}
exports.ValidationException = ValidationException;
class ControllerException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
        this.name = "ControllerException";
    }
}
exports.ControllerException = ControllerException;
// import { Request, Response } from 'express';
// import { Road, TrafficUpdate } from '../models';
// import { Parser } from 'json2csv';
// export class ReportController {
//     static async generateTrafficReport(req: Request, res: Response) {
//         try {
//             const roads = await Road.find().populate('start_location_id end_location_id');
//             const trafficUpdates = await TrafficUpdate.find();
//             const reportData = roads.map(road => {
//                 const latestUpdate = trafficUpdates.filter(update => update.road_id.toString() === road._id.toString()).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())[0];
//                 return {
//                     road_id: road._id,
//                     start_location: road.start_location_id.name,
//                     end_location: road.end_location_id.name,
//                     distance: road.distance,
//                     traffic_condition: latestUpdate ? latestUpdate.traffic_condition : 'unknown'
//                 };
//             });
//             const parser = new Parser();
//             const csv = parser.parse(reportData);
//             res.header('Content-Type', 'text/csv');
//             res.attachment('traffic_report.csv');
//             res.send(csv);
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     }
// }
