import express from 'express';
import ConnDb from './config/db.js';
import dotenv from 'dotenv';
import productRouter from './routes/product.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
dotenv.config();
import userRoutes from './routes/userRoutes.js'; 

const port = process.env.PORT || 4000


ConnDb();

const app = express()

// app.get('/', (req,res) => {
//     res.send("first API send message")
// })
app.use('/api/products/', productRouter)
app.use('/api/users/', userRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`the server runn on ${port}`))