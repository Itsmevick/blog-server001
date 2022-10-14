const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const fs = require('fs')
const path = require('path')
require('dotenv/config');

const app = express()
const port = 3000;
const postRoute = require('./api/routes/blogs');

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


//Routes
app.use('/posts', postRoute);

//connect to the database
try{
    mongoose.connect(process.env.DATABASE_URI,
        {useNewUrlParser: true, useUnifiedTopology: true },
        ()=>console.log("Database connected"));
}catch(e){
    console.log(`Error occured\n${e}`);
}

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})

