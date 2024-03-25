import  express, { Router } from 'express';
import dotenv from'dotenv';
import cors from 'cors';
import {router} from '../routes/routes.portfolio.js'
dotenv.config()


const app= express();
const PORT=process.env.PORT
app.use(router)
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.listen(PORT,  () => {
    console.log(`express app is running ${PORT}`)
})

