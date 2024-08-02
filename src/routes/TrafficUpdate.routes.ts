
import { Router } from 'express';
import { TrafficUpdateController } from '../controller/TrafficUpdate.controller';

const router = Router();

router.post('/traffic-updates', TrafficUpdateController.updateTraffic);

export default router;