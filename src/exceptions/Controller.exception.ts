export class ValidationException extends Error {
    constructor(public message: string, public code: number) {
        super(message);
        this.name = "ValidationException";
    }
}

export class ControllerException extends Error {
    constructor(public message: string, public code: number) {
        super(message);
        this.name = "ControllerException";
    }
}







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

// import express from 'express';
// import { LocationController, RoadController, TrafficUpdateController, PathfindingController, ReportController } from './controllers';

// const app = express();
// app.use(express.json());

// app.post('/locations', LocationController.addLocation);
// app.post('/roads', RoadController.addRoad);
// app.post('/traffic-updates', TrafficUpdateController.updateTraffic);
// app.get('/shortest-path', PathfindingController.getShortestPath);
// app.get('/roads/:id/traffic-condition', RoadController.getTrafficCondition);
// app.get('/report/traffic', ReportController.generateTrafficReport);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });