import {handleRequests, init, handleResponses} from 'express-oas-generator'
import mongoose from 'mongoose';

import  express from 'express';
import dotenv from'dotenv';
import { Router } from './routes/routes.portfolio.js'; 
import cors from 'cors';
dotenv.config()


const app= express();
const PORT=process.env.PORT
constmodelNames=mongoose.modelNames()
handleResponses(app, {});

app.use(express.json())

app.use(Router)

init(
    app,
    function(spec) { return spec; },
    'swagger.json',
    60 * 1000,
    'api-docs',
    modelNames,
    ['Skills', ],
    ['users', 'students'],
    ['production'],
    true,
    SPEC_OUTPUT_FILE_BEHAVIOR.RECREATE
  )


app.use(express.urlencoded({extended:false}))
app.use(cors())


app.listen(PORT,  () => {
    console.log(`express app is running ${PORT}`)
})

app.use(Router())
handleRequests();

