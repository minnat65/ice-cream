import 'express-async-errors';
import "reflect-metadata";
import 'dotenv/config';
import express from "express";
import { json } from "body-parser";
import cors from 'cors';
import morgan from 'morgan';

import { errorHandler } from './middleware/errorHandler';
import { iceCreamRoute } from './routes/ice-cream';
import { helperRouter } from './routes/helper';


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(morgan('combined'))

app.use(cors({
  origin: "http://localhost:5173",
  allowedHeaders: ["content-type"],
  credentials: true,
}));

app.use('/api/v1', iceCreamRoute);
app.use('/api/v1', helperRouter);

app.use('*', async () => {
  throw new Error('Not Found')
})

app.use(errorHandler);

export { app };
