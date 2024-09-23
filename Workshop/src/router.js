import { Router } from 'express';

import homeController from './controllers/homeController.js';
import catController from './controllers/catController.js';


const router = Router();

router.use(homeController);
router.use('/cats', catController)

export default router