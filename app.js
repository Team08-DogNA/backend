import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import sequelize from './src/config/sequelize';
import errorMiddleware from './src/middlewares/error';
import {
  communityRouter,
  authRouter,
  userRouter,
  postRouter,
} from './src/routes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: '*', credentials: true }));

sequelize.sync({ alter: true });

app.use('/community', communityRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use(errorMiddleware);

app.listen(process.env.SEVER_PORT, () => console.log(`✅ Listening...`));
