import express from 'express';
import cors from 'cors';
import rootRouter from './routes/index.js';

const app=express();;
app.use(cors());
app.use(express.json());

app.use(cors({
    origin: ["https://news-app-beta-wheat.vercel.app/", "http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
  }));

app.use("/news/v1", rootRouter);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})