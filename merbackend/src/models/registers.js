const mongoose=require("mongoose");
const emplaoyeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    age:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    profession:{
        type:String,
        require:true
    }
    
})
//now we need to create some collections
const Register=new mongoose.model("Register",emplaoyeSchema);
module.exports=Register;