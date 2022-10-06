const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

const app = express()
const port = 3000;
const postRoute = require('./api/routes/post');

//Middlewares
app.use(bodyParser.json());


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

