import express from 'express';
import { handleGenerateNewShortURL,
    hadleAnalytics } from '../controllers/url.js';

const router = express.Router();

router.post('/', handleGenerateNewShortURL);
router.get('/analytics/:shortId',hadleAnalytics)
export default router;