import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/error.js';

dotenv.config();

connectDB();
const app = express();

app.use('/api/products', productRoutes);

// Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const ENVIROMENT = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server running in [${ENVIROMENT}] mode on port ${PORT}`.yellow.bold));
