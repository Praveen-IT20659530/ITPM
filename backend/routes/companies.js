const router = require("express").Router();
const Company = require("../models/company");
let company = require("../models/company");


//add data
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


//Get a company by using ID
router.route("/get/:id").get(async(req,res)=>{
  const dr = await Company.findById(req.params.id);

if (dr) {
  res.json(dr);
} else {
  res.status(404).json({ message: "Company not found" });
}
})



//Update 

router.route("/update/:id").patch(async(req,res)=>{

    const com = await Company.findById(req.params.id);

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
router.route("/delete/:id").delete(async(req, res) => {
    let companyID = req.params.id;

    await Company.findByIdAndDelete(companyID).then(()=>{
      res.status(200).send({status: "company deleted"});
    }).catch((err)=>{
      console.log(err.message);
      res.status(500).send({status: "Error with deleting data", error:err.message});
    })
})

router.get('/all',(_req,res)=>{

  Company.find().exec((err,companies)=>{
      if(err){
    return res.status(400).json({
     error:err



    });


   }

    return res.status(200).json({

        success:true,
        existingCusPacks:companies


    });


  });



});

module.exports = router;