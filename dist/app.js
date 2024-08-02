"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const Location_controller_1 = require("./controller/Location.controller");
const PathFinder_controller_1 = require("./controller/PathFinder.controller");
const Road_controller_1 = require("./controller/Road.controller");
const TrafficUpdate_controller_1 = require("./controller/TrafficUpdate.controller");
const express = require('express');
const cookieParser = require('cookie-parser');
exports.app = express();
// app.ts contains app specific configurations
exports.app.use(express.json());
exports.app.use(express.urlencoded({ extended: true }));
exports.app.use(express.static('public'));
exports.app.use(cookieParser());
exports.app.post('/locations', Location_controller_1.LocationController.addLocation);
exports.app.post('/roads', Road_controller_1.RoadController.addRoad);
exports.app.post('/traffic-updates', TrafficUpdate_controller_1.TrafficUpdateController.updateTraffic);
exports.app.get('/shortest-path', PathFinder_controller_1.PathfindingController.getShortestPath);
