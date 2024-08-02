"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShortestPath = void 0;
const location_model_1 = require("../model/location.model");
const Road_model_1 = require("../model/Road.model");
const getShortestPath = (startLocationId, endLocationId) => __awaiter(void 0, void 0, void 0, function* () {
    const locations = yield location_model_1.Location.find();
    const roads = yield Road_model_1.Road.find();
    const graph = {};
    roads.forEach(road => {
        if (!graph[road.start_location_id.toString()]) {
            graph[road.start_location_id.toString()] = [];
        }
        graph[road.start_location_id.toString()].push({ id: road.end_location_id.toString(), distance: road.distance });
        if (!graph[road.end_location_id.toString()]) {
            graph[road.end_location_id.toString()] = [];
        }
        graph[road.end_location_id.toString()].push({ id: road.start_location_id.toString(), distance: road.distance });
    });
    const distances = {};
    const previous = {};
    const queue = [];
    locations.forEach(location => {
        distances[location.id] = Infinity;
        previous[location.id] = null;
        queue.push(location.id);
    });
    distances[startLocationId] = 0;
    while (queue.length > 0) {
        const current = queue.reduce((minNode, node) => (distances[node] < distances[minNode] ? node : minNode), queue[0]);
        queue.splice(queue.indexOf(current), 1);
        if (current === endLocationId) {
            const path = [];
            let step = current;
            while (previous[step]) {
                path.unshift(step);
                step = previous[step];
            }
            path.unshift(startLocationId);
            return path;
        }
        graph[current].forEach(neighbor => {
            const alt = distances[current] + neighbor.distance;
            if (alt < distances[neighbor.id]) {
                distances[neighbor.id] = alt;
                previous[neighbor.id] = current;
            }
        });
    }
    return null;
});
exports.getShortestPath = getShortestPath;
