const data = require('../model/studentSchema')



const NewStdData = async(req,res)=>{
    try{
     let badal = new data(req.body);
     let store = await badal.save();
     res.status(201).json({
        success:"true",
        data:{store}
     })

    }catch(e){
        console.log(e)
    }
}

module.exports ={NewStdData}