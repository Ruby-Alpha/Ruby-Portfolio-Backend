import  express from 'express';
import dotenv from'dotenv';
import cors from 'cors';
import AchievementRoutes from './routes/routes.achievement.js';
import ProjectRoutes from './routes/routes.project.js';
import ExperienceRoutes from './routes/routes.experience.js';
import BlogRoutes from './routes/routes.blog.js';
import SkillsRoutes from './routes/routes.skills.js';
import mongoose from 'mongoose';

dotenv.config()


const app= express();


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
})