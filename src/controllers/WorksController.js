const WorksController = require('../controllers/WorksController');
const WorksModel = require('../models/WorksModel');

exports.CreateWork= (req,res)=>{
    let reqBody=req.body;
    let title =reqBody['title'];
    let classNote=reqBody['classNote'];
    let description =reqBody['description'];
    let status="New"
    let email =req.headers['email'];
    let postBody={
        title:title,
        classNote:classNote,
        description:description ,
        status:status,
        email:email
    }


    WorksModel.create(postBody).
    then((result)=>{
            res.status(201).json({status:"Task Added successful",data:result })
        })
        .catch((err)=>{
            res.status(400).json({status:"fail",data:err })
        })
}

exports.SelectWork= async (req,res)=>{

    let email=req.headers['email'];
    try {
        let result=await WorksModel.find({email:email},(err,data)=>{
            if(err){
                res.status(200).json({status:"fail",data:err})
            }
            else{
                res.status(200).json({status:"success",data:data})
            }
        });
    }
    catch (e) {
        res.status(200).json({status:"failed to read Header",data:e.toString()})
    }

}
exports.UpdatetWork= async (req,res)=>{
    let reqBody=req.body;
    let title =reqBody['title'];
    let classNote=reqBody['classNote'];
    let description =reqBody['description'];
    let email =req.headers['email'];
    let _id=req.body['_id'];
   
    let postBody={
        title:title,
        classNote:classNote,
        description:description ,
        email:email
    }
    

    try {
        let result=await WorksModel.updateOne({_id:_id},{$set:postBody} ,(err,data)=>{
            if(err){
                res.status(200).json({status:"fail",data:err})
            }
            else{
                res.status(200).json({status:"success",data:data})
            }
        });
    }
    catch (e) {
        res.status(200).json({status:"failed to read Header",data:e.toString()})
    }

}
