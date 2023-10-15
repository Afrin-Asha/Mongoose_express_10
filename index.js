const   app =require("./app");
const dotenv=require("dotenv");
dotenv.config({path:"./config.env"});


app.listen(process.env.RUNNING_PORT,function(){
    console.log("The Server is running on port",process.env.RUNNING_PORT);
})