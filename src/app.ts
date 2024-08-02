const express = require('express');
const cookieParser = require('cookie-parser');

export const app = express();

// app.ts contains app specific configurations
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(cookieParser());


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