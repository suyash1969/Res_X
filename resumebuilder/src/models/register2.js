const mongoose = require("mongoose");
// var uniqueValidator = require('mongoose-unique-validator');
// const jwt= require ("jsonwebtoken");

const employeschema1=new mongoose.Schema({
    namec:{
        type:String
    },
    about:{
        type:String
    },
    locationc:{
        type:String
    },
    emailc:{
        type:String
    },
    phonec:{
        type:String
    },
    collegec:{
        type:String
    },
    streamc:{
        type:String
    },
    caddressc:{
        type:String
    },
    cpic:{
        type:String
    },
    addressc:{
        type:String
    },
    project: [
        {
            projecttitle1: {
            type: [String],
          
          },
          projectdescription1: {
            type: [String],
           
          }
        }
      ],
    
    
    education:[
        {
            year1: {
                type: [String],
              
              },
              class:{
                type:[String],
              },
            school: {
                type: [String],
               
              },
              marks: {
                type: [String],
               
              }
    }
],

    experience:[
        {
            year: {
                type: [String],
              
              },
            company: {
                type: [String],
               
              },
              desc: {
                type: [String],
               
              }
    }
],
    token:{
        type:String
    },
    imagec: {
        data: Buffer,
        contentType: String
    },
    hobby1:{
        type:[String]
    },
    skill1:{
        type:[String]
    },
    template: {
        type: String,
        required: true,
      },
    
})



const Register2=new mongoose.model("resumedetailscollection",employeschema1);
// employeschema.plugin(uniqueValidator);
module.exports=Register2;