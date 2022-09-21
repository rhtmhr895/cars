const express = require('express');
const router = express.Router();

const postData = require('../controller/postData');



router.post('/add',postData.NewStdData);







module.exports= router;