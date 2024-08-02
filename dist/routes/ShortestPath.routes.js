"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PathFinder_controller_1 = require("../controller/PathFinder.controller");
const router = (0, express_1.Router)();
router.post('/shortest-path', PathFinder_controller_1.PathfindingController.getShortestPath);
exports.default = router;
