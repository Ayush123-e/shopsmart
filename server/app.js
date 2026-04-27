import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler.js';
import healthRoutes from './routes/healthRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import productRoutes from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/orderRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', healthRoutes);
app.use('/api', uploadRoutes);
app.use('/api/auth', userRouter);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.use(errorHandler);

export default app;
