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
exports.PathfindingController = void 0;
const shortestPath_service_1 = require("../services/shortestPath.service");
const exception_1 = require("../utils/exceptions/exception");
const Road_model_1 = require("../model/Road.model");
class PathfindingController {
    static getShortestPath(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { start_location_id, end_location_id } = req.query;
                if (!start_location_id || !end_location_id) {
                    throw new exception_1.ValidationException('start_location_id and end_location_id are required', 400);
                }
                const path = yield (0, shortestPath_service_1.getShortestPath)(start_location_id, end_location_id);
                if (path) {
                    const road = yield Road_model_1.Road.findOne();
                    const total_distance = path.length;
                    // TODO: improve this logic
                    const estimated_time = path.length * 2 + ((road === null || road === void 0 ? void 0 : road.traffic_condition) === 10 ? 10 : (road === null || road === void 0 ? void 0 : road.traffic_condition) === 5 ? 5 : 1);
                    res.status(200).json({ path, total_distance: total_distance, estimated_time: estimated_time });
                }
                else {
                    res.status(404).json({ error: 'Path not found' });
                }
            }
            catch (error) {
                console.log(error);
                throw new exception_1.ControllerException("error getting shortest path", 500);
            }
        });
    }
}
exports.PathfindingController = PathfindingController;
