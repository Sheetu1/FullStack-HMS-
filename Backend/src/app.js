import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import messageRouter from  "./routes/messageRouter.js";
import {errorMiddleware} from './middleware/errorMiddleware.js'


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:'/tmp/'
}));

app.use(
  cors({
    origin: [process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
    methods:['GET','PUT','PATCH','DELETE'],
    credentials: true,
  })
);

app.use('/api/v1/message',messageRouter);
app.use(errorMiddleware);

export default app;
