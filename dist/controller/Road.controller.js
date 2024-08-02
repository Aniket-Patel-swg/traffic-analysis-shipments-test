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
exports.RoadController = void 0;
const Road_model_1 = require("../model/Road.model");
const TrafficUpdate_model_1 = require("../model/TrafficUpdate.model");
const exception_1 = require("../utils/exceptions/exception");
class RoadController {
    static addRoad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { start_location_id, end_location_id, distance, traffic_condition } = req.body;
                if (!start_location_id || !end_location_id || !distance || !traffic_condition) {
                    throw new exception_1.ValidationException("start_location_id, end_location_id, distance, and traffic_condition are required", 400);
                }
                if (traffic_condition == 'clear') {
                    traffic_condition = 1;
                }
                else if (traffic_condition == 'moderate') {
                    traffic_condition = 5;
                }
                else if (traffic_condition == 'high') {
                    traffic_condition = 10;
                }
                else {
                    throw new exception_1.ValidationException("Invalid traffic condition", 400);
                }
                const road = new Road_model_1.Road({ start_location_id, end_location_id, distance, traffic_condition });
                yield road.save();
                res.status(201).json("Created");
            }
            catch (error) {
                console.log(error);
                throw new exception_1.ControllerException("error posting roads", 500);
            }
        });
    }
    static getTrafficCondition(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const latestUpdate = yield TrafficUpdate_model_1.TrafficUpdate.findOne({ road_id: id }).sort({ timestamp: -1 });
                res.status(200).json({ traffic_condition: latestUpdate ? latestUpdate.traffic_condition : 'unknown' });
            }
            catch (error) {
                throw new exception_1.ControllerException("error getting traffic condition", 500);
            }
        });
    }
}
exports.RoadController = RoadController;
