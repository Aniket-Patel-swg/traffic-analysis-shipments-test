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
exports.LocationController = void 0;
const location_model_1 = require("../model/location.model");
const exception_1 = require("../utils/exceptions/exception");
class LocationController {
    static addLocation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, latitude, longitude } = req.body;
                if (!name || !latitude || !longitude) {
                    throw new exception_1.ValidationException("name, latitude, and longitude are required", 400);
                }
                const location = new location_model_1.Location({ name, latitude, longitude });
                yield location.save();
                res.status(201).json("Created");
            }
            catch (error) {
                throw new exception_1.ControllerException("error posting location", 500);
            }
        });
    }
}
exports.LocationController = LocationController;
