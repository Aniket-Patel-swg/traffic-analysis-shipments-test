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
exports.TrafficUpdateController = void 0;
const TrafficUpdate_model_1 = require("../model/TrafficUpdate.model");
const exception_1 = require("../utils/exceptions/exception");
class TrafficUpdateController {
    static updateTraffic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { road_id, timestamp, traffic_condition } = req.body;
                const trafficUpdate = new TrafficUpdate_model_1.TrafficUpdate({ road_id, timestamp, traffic_condition });
                yield trafficUpdate.save();
                res.status(201).json("Created");
            }
            catch (error) {
                throw new exception_1.ControllerException("error updating traffic", 500);
            }
        });
    }
}
exports.TrafficUpdateController = TrafficUpdateController;
