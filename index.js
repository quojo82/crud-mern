import express from "express";
import mongoose, { Error } from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./Routes/userRoutes.js"

//express app
const app = express();

//middlewares
app.use(bodyParser.json());
dotenv.config();



const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log(`MongoDB connected successfully`);

    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

  app.use('/api/user', route)
