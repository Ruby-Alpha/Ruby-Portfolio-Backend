import  express from 'express';
import dotenv from'dotenv';
import cors from 'cors';
dotenv.config()


const app= express();
const PORT=process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(routes())

app.listen(PORT,  () => {
    console.log(`express app is running ${PORT}`)
})