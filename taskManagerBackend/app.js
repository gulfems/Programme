import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import { taskRouter } from './src/router.js';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());
app.use('/tasks', taskRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(console.error);

// Define your routes here
app.get('/', (req, res) => {
    res.send('Task Manager API is running');
})


export default app;


