
import { Router } from 'express';
import { LocationController } from '../controller/Location.controller';

const router = Router();

router.post('/locations', LocationController.addLocation);

export default router;