import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import verifyJWT from './middleware/auth.js';
import orderRouter from './routes/oredrRouter.js';

const app = express();

mongoose.connect("mongodb+srv://admin:123@cluster0.lnawixo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>{
       console.log("Connected to the DataBase.")
    }
).catch(
    ()=>{
        console.log("Connection Failed.")
    }
);

app.use(bodyParser.json());
app.use(verifyJWT)
 

app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.use("/api/order",orderRouter);





app.listen(5000,()=>{
    console.log("Server is listen to PORT 5000"); 
})