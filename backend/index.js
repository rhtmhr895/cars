const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Rohit';
const addRouter = require('./route/route');
const port = process.env.express||5500;
const cors = require('cors')
var mouse = express();

mongoose.connect(url).then((res)=>{
    try{
           console.log("connected to database");
    }catch(err){
        console.log(err)
    }
});

mouse.use(cors())
mouse.use(express.json());
mouse.use('/api', addRouter);


mouse.listen(port, ()=>{
    try{
        console.log("server is listening on port", port)

    }catch(e){
        console.log(e)
    }
})