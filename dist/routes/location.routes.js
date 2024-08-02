"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Location_controller_1 = require("../controller/Location.controller");
const router = (0, express_1.Router)();
router.post('/locations', Location_controller_1.LocationController.addLocation);
exports.default = router;
