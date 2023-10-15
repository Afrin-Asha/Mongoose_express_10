const StudentsModel=require("../models/StudentsModel");
const OTPModel = require("../models/OTPModel");
const jwt = require("jsonwebtoken");


//Create
exports.registration=(req,res)=>{
    let reqBody=req.body;
    StudentsModel.create(reqBody).
    then((result)=>{
            res.status(201).json({status:"Registration successful",data:result })
        })
        .catch((err)=>{
            res.status(400).json({status:"Registration failed",data:err })
        })
}    

exports.login=async (req,res)=>{

    try{
        let reqBody=req.body;
        let result= await StudentsModel.find(reqBody).count();
        if(result===1){
            // Creates Token
            let Payload={
                exp:Math.floor(Date.now()/1000)+(24*60*60),
                data:reqBody['email']
            }
            let token=jwt.sign(Payload,"SecretKey123456789");
            res.status(200).json({status:"Login successful",data:token})

        }
        else{
            // Login fail
            res.status(200).json({status:"Login failed",data:"No User Found"})
        }
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}





///Read
exports.ReadStudents=async (req,res)=>{
    try {
        let result=await StudentsModel.find();
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }


}

//Update 
exports.UpdateStudents=async (req,res)=>{

    try {
        let id= req.params.id;
        let reqBody=req.body
        let result=await StudentsModel.updateOne({_id:id},reqBody);
        res.status(200).json({status:"success",data:result})

    }catch (err) {
        res.status(200).json({status:"fail",data:err.toString()})
    }

}
//Delete
exports.DeleteStudent=async(req,res)=>{

    try{
        let id =req.params.id
        let result=await StudentsModel.deleteOne({_id:id});//here remove doesn't work
        // let result=await StudentsModel.deleteOne({_id:id});//here remove doesn't work
        res.status(200).json({status:"success",data:result})
    }catch(err){
        res.status(200).json({status:"fail",data:err.toString()})
    }
}




