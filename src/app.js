import  express from 'express';
import dotenv from'dotenv';
import cors from 'cors';
import { router } from './routes/allroutes.js';

import mongoose from 'mongoose';
import { handleRequests, init, handleResponses } from "express-oas-generator";

dotenv.config()

const modelNames = mongoose.modelNames();

const app = express();
handleResponses(app, {});




app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.use(router)


const PORT = process.env.PORT;

await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('database is connected')
});




app.listen(PORT,  () => {
    
    init(
        app,
        (spec) => {
          spec.info = {
            title: "Portfolio API Documentation",
            description: "API Documentation for Portfolio website",
          };
          spec.host = "ruby-portfolio-backend.onrender.com";
          spec.schemes = ["http", "https"];
    
          return spec;
        },
        "./swagger.json",
        60 * 1000,
        "api-docs",
        modelNames,
        ["skills", "projects", "achievements", "blogs", "experience" ],
        ["development"],
        true
      );
    
      console.log(`express app is running ${PORT}`)
    });
    
   
    handleRequests()
