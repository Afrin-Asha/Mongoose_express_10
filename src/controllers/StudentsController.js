const StudentsModel=require("../models/StudentsModel");


//Create
exports.InsertStudent=(req,res)=>{
    let reqBody=req.body;
    StudentsModel.create(reqBody).
    then((result)=>{
            res.status(201).json({status:"success",data:result })
        })
        .catch((err)=>{
            res.status(400).json({status:"fail",data:err })
        })
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




