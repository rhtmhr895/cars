const mongoose = require('mongoose');

const StudentData = new mongoose.Schema({
  name:{type:String, required:true},
  class:{type:String, required:true},
  school:{type:String, required:true},
  email:{type:String, required:true},
  phone:{type:String, required:true},
});

module.exports = mongoose.model('Clutch', StudentData);

