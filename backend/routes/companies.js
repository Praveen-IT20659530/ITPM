const router = require("express").Router();
const Company = require("../models/company");
let company = require("../models/company");

//add data

http://localhost:8070/company/add

router.route("/add").post((req,res)=>{

    const Name = req.body.Name;
    const Contact_Number = Number (req.body.Contact_Number);
    const Location  = req.body.Location ;
    const Email = req.body.Email;
    
   

    const newCompany = new Company({
        Name,
        Contact_Number,
        Location,
        Email
    })

    newCompany.save().then(()=>{
        res.json("New Company Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Retrive all

http://localhost:8070/company

router.get("/all",(req,res)=>{
    company.find().exec((err,companies)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            existingCompanies:companies
        });
    });
});


//Retrive by ID 
router.route("/get/:id").get(async(req,res)=>{
    const com = await company.findById(req.params.id);

  if (com) {
    res.json(com);
  } else {
    res.status(404).json({ message: "Company not found" });
  }
})

   module.exports = router;

//Update 

http://localhost:8070/company/update/5isadfasddafs


router.route("/update/:id").patch(async(req,res)=>{

    const com = await company.findById(req.params.id);

  if (com) {
    com.Name = req.body.Name || com.Name;
    com.Contact_Number = req.body.Contact_Number || com.Contact_Number;
    com.Location = req.body.Location || com.Location;
    com.Email = req.body.Email || com.Email;

    const updatecompany = await com.save();

    res.json({
        Name: updatecompany.Name,
        Contact_Number: updatecompany.Contact_Number,
        Location: updatecompany.Location,
        Email: updatecompany.Email,
        
    });
  } else {
    res.status(404);
    
    throw new Error("Can't Update Company Details");
  }


})

//Delete

http://localhost:8070/company/delete/

router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await company.findByIdAndDelete(userId).then(()=>{
      res.status(200).send({status: "company deleted"});
    }).catch((err)=>{
      console.log(err.message);
      res.status(500).send({status: "Error with deleting data", error:err.message});
    })
})

router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;

    const user = await company.findById(userId).then((company)=>{
        res.status(200).send({status: "User fetched", company})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error:err.message});
    })

})

module.exports = router;