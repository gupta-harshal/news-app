import express from 'express';
import newsRouter from './news.js';    
const router = express.Router();

router.use('/article', newsRouter);
export default router;