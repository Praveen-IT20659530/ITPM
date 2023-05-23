const mongoose = require('mongoose');
//const router = require('../routes/packages');



//Create Database Scheams
const CompanyScheama = new mongoose.Schema({
    Name :{
    type : String,
    required : true
},

Contact_Number :{
    type : Number,
    required : true   
},

Location:{
    type:String,
    required : true
},

Email:{
 type:String,
 required:true
}

})

//Create a module for connect with scheama
const Company=mongoose.model("Company",CompanyScheama);

module.exports=Company;