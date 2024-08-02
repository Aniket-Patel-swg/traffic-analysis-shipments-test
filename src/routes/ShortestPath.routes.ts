
import { Router } from 'express';
import { PathfindingController } from '../controller/PathFinder.controller';

const router = Router();

router.post('/shortest-path', PathfindingController.getShortestPath);

export default router;