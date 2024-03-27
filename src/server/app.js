import  express from 'express';
import dotenv from'dotenv';
import cors from 'cors';
import AchievementRoutes from '../routes/routes.achievement.js';
import ProjectRoutes from '../routes/routes.project.js';
import ExperienceRoutes from '../routes/routes.experience.js';
import BlogRoutes from '../routes/routes.blog.js';
import SkillsRoutes from '../routes/routes.skills.js';
import mongoose from 'mongoose';
import { handleRequests, init, handleResponses } from "express-oas-generator";

dotenv.config()

const modelNames = mongoose.modelNames();

const app = express();
handleResponses(app, {});




app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.use(AchievementRoutes)
app.use(ProjectRoutes)
app.use(ExperienceRoutes)
app.use(BlogRoutes)
app.use(SkillsRoutes)


const PORT = process.env.PORT;

await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('database is connected')
});




app.listen(PORT,  () => {
    console.log(`express app is running ${PORT}`)

    

    init(
        app,
        (spec) => {
          spec.info = {
            title: "Portfolio API Documentation",
            description: "API Documentation for Portfolio website",
          };
          spec.host = "localhost:7060";
          spec.schemes = ["http", "https"];
    
          return spec;
        },
        "./swagger.json",
        60 * 1000,
        "api-docs",
        modelNames,
        ["users"],
        ["development"],
        true
      );
    
      console.log(
        'Server Listening on  8080, Open http://localhost:8080/api-docs/'
      );
    });
    
    app.use(AchievementRoutes)
    app.use(ProjectRoutes)
    app.use(ExperienceRoutes)
    app.use(BlogRoutes)
    app.use(SkillsRoutes)
    
    handleRequests()
