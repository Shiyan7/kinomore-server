import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import router from './router/index.js';
import errorMiddleware from './middlewares/error-middleware.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

const corsWhitelist = [
    process.env.CLIENT_URL,
    "http://localhost:3000",
]

const corsOptions = {
    exposedHeaders: '*',
    methods: 'GET, PUT, POST',
    origin: corsWhitelist,
    credentials: true,
  }

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions))
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()