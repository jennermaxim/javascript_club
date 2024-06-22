import express from 'express';

import { getApplication } from '../controllers/application.js';

const router = express.Router();

router.get('/', getApplication);

export default router;