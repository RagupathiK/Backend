const express  = require('express');
const app = express();
const bodyparser= require('body-parser');
const mongoose = require('mongoose')
const dotenv =require('dotenv')
const path = require('path')
const cors = require('cors')
const connectdatabase = require('./Connection/connectdatabase');
dotenv.config({path: path.join(__dirname, 'Connection', 'config.env')})

const products = require('./routes/product');
const orders = require('./routes/order');
const userDatas = require('./routes/Register') 

connectdatabase();

app.use(express.json());
app.use(cors({
    origin:"https://reliancedigitalproject.netlify.app",
    credentials:true
}));
app.use('/api/v1/',products);
app.use('/api/v1/',orders);
app.use('/user',userDatas)

app.listen(process.env.PORT, ()=> {
    console.log(`Server Listening port ${process.env.PORT} in ${process.env.NODE_ENV}`);
    
});
