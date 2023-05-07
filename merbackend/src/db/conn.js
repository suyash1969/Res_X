const mongoose = require("mongoose");

//the connect method gives us the data in the future and store also ..
mongoose.connect("mongodb://127.0.0.1:27017/employe",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log(`connection sussefully done`);
}).catch((e)=>{
    console.log(e);
})