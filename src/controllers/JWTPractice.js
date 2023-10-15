const jwt=require('jsonwebtoken');

exports.CreateToken=(req,res)=>{
    let payload={
        exp:Math.floor(Date.now()/1000)+60*60,
        data:{Name:"Sanjida",City:"Rangpur",admin:true}
    }
    let Token =jwt.sign(payload,'secretkey123');
    res.send(Token);
}

//Decode token

exports.DecodeToken=(req,res)=>{
    let Token=req.headers['token-key']

    jwt.verify(Token,'secretkey123',(err,data)=>{
        if(err){
            res.status(401).json({status:"Invalid Token",data:err})
        }else{
            res.status(200).json({status:"successfully token decoded ",data:data})
        }
    })

}