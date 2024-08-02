
import { Router } from 'express';
import { RoadController } from '../controller/Road.controller';

const router = Router();

router.post('/locations', RoadController.addRoad);

router.get('/roads/:id/traffic-condition', RoadController.getTrafficCondition);

export default router;