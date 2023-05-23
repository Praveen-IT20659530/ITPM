const router = require("express").Router();
let Company = require("../model/Company");

//Add a new company to the system
router.route("/add").post((req,res)=>{

    const Name = req.body.Name; 
    const Contact_Number= Number(req.body.Contact_Number)
    const Location = req.body.Location; 
    const Email = req.body.Email; 
    ; 
    const newCom = new Company({
      Name,
      Contact_Number,
      Location,
      Email
    })
    newCom.save().then(()=>{
        res.json("New Company added successfully...");
     }).catch((err)=>{
   
        console.log(err);
     })
   }) 


//Get all company data 

// router.get('/all',(_req,res)=>{
//   Company.find().exec((err,companies)=>{
//       if(err){
//     return res.status(400).json({
//      error:err
//     });
//    }

//     return res.status(200).json({
//         success:true,
//         existingCompanies:companies
//     });
//   });
// });

router.get("/all", async (req, res) => {
  const companies = await Company.find();
  res.json({ 
    success:true,
    existingCompanies:companies});
});

//Retrive by ID 222
router.route("/get/:id").get(async(req,res)=>{
    const pk = await Company.findById(req.params.id);
  
  if (pk) {
    res.json(pk);
  } else {
    res.status(404).json({ message: "Company not found" });
  }
  })

  //Update vehicle Details

router.route("/update/:id").patch(async(req,res)=>{

  const pk = await Company.findById(req.params.id);

if (pk) {
  pk.Name = req.body.Name || fb.Name;
  pk.Contact_Number = req.body.Contact_Number || fb.Contact_Number;
  pk.Location = req.body.Location || fb.Location;
  pk.Email = req.body.Email || fb.Email;
  const updateCompany = await pk.save();

  res.json({
    Name: updateCompany.Name,
    Contact_Number: updateCompany.Contact_Number,
    Location: updateCompany.Location,
    Email : updateCompany.Email 
  });
} else {
  res.status(404);
  
  throw new Error("Can't Update Company Details");
}

})


//Delete any vehicle
router.route("/delete/:id").delete(async(req,res)=>{

  let vId =req.params.id;
  
  await Company.findByIdAndDelete(vId).then(()=> {
  
   res.status(200).send({status: "Company Deleted.."});
   
   }).catch((err)=>{
  
  console.log(err.message);
  res.status(500).send({status: "Error with delete the Comapny", error:err.message});
  
   })
  
  })
  module.exports = router;


  