import express from 'express';
import colors from 'colors';
import connectDB from './config/db.js';
import dotenv from "dotenv";
import morgan from "morgan"
import cors from "cors";
import  cookieParser  from "cookie-parser";


dotenv.config();
//Mongo db connection
connectDB();

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser());

// importing routes


// idr ham api bnana laga ha

// http://localhost:8080/
// http://localhost:8080/api/v1/users
import  userRoutes  from "./routes/userRoutes.js";
app.use("/api/v1/users",userRoutes)

// http://localhost:8080/api/v1/categories
import  categoriesRoutes  from "./routes/categoriesRoutes.js";
app.use("/api/v1/categories",categoriesRoutes)

// http://localhost:8080/api/v1/products
import productsRoutes from './routes/productsRoutes.js'
app.use("/api/v1/products",productsRoutes)

const PORT =process.env.PORT || 3000;

app.listen(PORT , ()=>{console.log(`Server is running at port ${PORT}`.bgMagenta);});