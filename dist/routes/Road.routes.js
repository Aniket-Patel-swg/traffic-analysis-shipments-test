"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Road_controller_1 = require("../controller/Road.controller");
const router = (0, express_1.Router)();
router.post('/locations', Road_controller_1.RoadController.addRoad);
router.get('/roads/:id/traffic-condition', Road_controller_1.RoadController.getTrafficCondition);
exports.default = router;
