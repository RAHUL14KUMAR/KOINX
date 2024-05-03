require('dotenv').config();
const express=require('express');
const connect=require('./Database/db');
const transactionRouter=require('./Routes/transaction')
const priceRouter=require('./Routes/price')

const port=process.env.PORT;


const app=express();
app.use(express.json());
app.use('/transaction',transactionRouter)
app.use('/price',priceRouter)

connect();
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})