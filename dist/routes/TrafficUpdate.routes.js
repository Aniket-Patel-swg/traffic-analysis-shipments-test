"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TrafficUpdate_controller_1 = require("../controller/TrafficUpdate.controller");
const router = (0, express_1.Router)();
router.post('/traffic-updates', TrafficUpdate_controller_1.TrafficUpdateController.updateTraffic);
exports.default = router;
