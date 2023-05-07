const express= require("express");
const path=require("path");

//in this app we have all the power of express..
const app=express();
const hbs=require("hbs");
require("./db/conn");


const Register=require("./models/registers");
const { error } = require("console");



const port= process.env.PORT || 3000;

const static_path =path.join(__dirname,"../public");
const template_path =path.join(__dirname,"../templates/views");
const partials_path =path.join(__dirname,"../templates/partials");

app.use(express.json());

//mean of this line everything is written inside the form is want to get in from encoding
app.use(express.urlencoded({extended:false}));



console.log(path.join(__dirname));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);

hbs.registerPartials(partials_path);

//Basically it is intended for binding the middleware to your application.
app.get("/",(req,res)=>{
    res.render("index");
});



app.get("/register",(req,res)=>{
    res.render("register");
});

app.get("/index",(req,res)=>{
    res.render("index");
});




//just demo we write here 

// app.post("/register", async(req,res)=>{
//     try{
//         console.log(req.body.name);
//         console.log(req.body.email);
//         console.log(req.body.password);
//         console.log(req.body.cpassword);
//         console.log(req.body.gender);
//         console.log(req.body.profession);
//         res.send(req.body.name);
//     }
//     catch{
//         res.status(400).send(error);
//     }
// })




//this for get the value of index one so we write this prorgam 
app.post("/index",async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        // console.log(`${email}and password is${password}`);
        const useremail=await Register.findOne({email:email});

        //if we want to know the what is password then
        //res.send(useremail.password)
        if(useremail.password===password)
        {
            res.status(201).render("index");
        }
        else
        {
            res.send("apki dale hui information shi nhi hai kripa shi kr le");
        }

    }
    catch(errore){
        res.status(400).send("invalid images");
    }
})






























// //create a new user in our database
app.post("/register",async(req,res)=>{
    try{

       const password=req.body.password;
       const cpassword=req.body.cpassword;
       if(password===cpassword){

        const registeremployee=new Register({
            name:req.body.name,
            email:req.body.email,
            age:req.body.age,
            password:req.body.password,
            cpassword:req.body.cpassword,
            gender:req.body.gender,
            profession:req.body.profession
        })
            //we get all data from the database but we want to store all the data then we will use 
       const registerd= await  registeremployee.save();
       res.status(201).render("index");


       }
       else
       {
        res.send("password are not matching")
       }

    }
    catch(error) {
        res.status(400).send(error); 
    }
})










app.listen(port,()=>{
    console.log(`server is runing on port  ${port}`);
})
