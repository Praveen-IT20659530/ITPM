const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({

    Name : {
        type : String,
        required: true
    },
    Contact_Number: {
        type : Number,
        required: true
    },
    Location : {
        type : String,
        required: true
    },
    Email : {
        type : String,
        required: true
    }
   
})

const Company = mongoose.model("Company",companySchema);

module.exports = Company;