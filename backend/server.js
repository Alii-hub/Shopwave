import express from 'express';
import colors from 'colors';
import connectDB from './config/db.js';
import dotenv from "dotenv";
import morgan from "morgan"
import cors from "cors";


dotenv.config();
//Mongo db connection
connectDB();

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin:"http://localhost:5173",credentials:true}))

// importing routes

import  userRoutes  from "./routes/userRoutes.js";

// idr ham api bnana laga ha

// http://localhost:8080/
// http://localhost:8080/api/v1/users

app.use("/api/v1/users",userRoutes)

const PORT =process.env.PORT || 3000;

app.listen(PORT , ()=>{console.log(`Server is running at port ${PORT}`.bgMagenta);});