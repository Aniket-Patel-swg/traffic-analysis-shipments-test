import { LocationController } from "./controller/Location.controller";
import { PathfindingController } from "./controller/PathFinder.controller";
import { RoadController } from "./controller/Road.controller";
import { TrafficUpdateController } from "./controller/TrafficUpdate.controller";

const express = require('express');
const cookieParser = require('cookie-parser');

export const app = express();

// app.ts contains app specific configurations
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(cookieParser());

app.post('/locations', LocationController.addLocation);

app.post('/roads', RoadController.addRoad);

app.post('/traffic-updates', TrafficUpdateController.updateTraffic);

app.get('/shortest-path', PathfindingController.getShortestPath);