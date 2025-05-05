import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY); 

router.post('/', async (req, res) => {
    const description = req.body.content;

    if (!description) {
        return res.status(400).json({ error: "Missing description" });
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const result = await model.generateContent(`Summarize the following article give less than 50 words :\n${description}`);
        const summary = result.response.text();

        return res.status(200).json({ summary });
    } catch (error) {
        console.error("Gemini Error:", error);
        return res.status(500).json({ error: "Failed to generate summary" });
    }
});

export default router;
