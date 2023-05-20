const router = require ("express").Router();
let electricity = require ("../models/electricity");

//add data
router.route("/add").post((req, res)=>{
    const pannelSize = parseFloat(req.body.pannelSize);
    const company = req.body.company;
    const intensity = Number(req.body.intensity);
    const  monthlyBill = parseFloat(req.body.monthlyBill);
    const units = Number(req.body.units);
    const irradiance = 5.0; 
  const conversionEfficiency = 0.8; 

    const newElectricity = new Electricity({
        pannelSize,
        company,
        intensity ,
        monthlyBill,
        units,
        irradiance,
        conversionEfficiency

    })
    newElectricity.save().then(()=>{
        res.json("Data Added")
    }).catch((err)=>{
        console.log(err);

    })
})


// Calculate monthly generated electricity, saving power, and saving money
router.post('/calculate', async (req, res) => {
    try {
      const electricityId = req.body.electricityId;
  
      const electricity = await Electricity.findById(electricityId);
      if (!electricity) {
        return res.status(404).json({ message: 'Electricity data not found' });
      }
  
      const monthlyGeneratedElectricity = calculateMonthlyGeneratedElectricity(electricity);
      const savingPower = calculateSavingPower(electricity);
      const savingMoney = calculateSavingMoney(electricity);
  
      res.json({ monthlyGeneratedElectricity, savingPower, savingMoney });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });

  // Function to calculate monthly generated electricity
function calculateMonthlyGeneratedElectricity(electricity) {
    const totalEnergyProduced = electricity.pannelSize * electricity.intensity * electricity.irradiance * electricity.conversionEfficiency;
    const monthlyGeneratedElectricity = totalEnergyProduced * 30;
    return monthlyGeneratedElectricity;
  }
  
  // Function to calculate saving power
  function calculateSavingPower(electricity) {
    const savingPower = electricity.monthlyBill - electricity.units ;
    return savingPower;
  }
  
  // Function to calculate saving money
  function calculateSavingMoney(electricity) {
    const savingMoney = (electricity.monthlyBill / electricity.units) * monthlyGeneratedElectricity - electricity.monthlyBill ;
    return savingMoney;
  }

// retrieve from database to the admin
router.get('/all',(req,res)=>{

    Electricity.find().exec((err,electricities)=>{
        if(err){
      return res.status(400).json({
       error:err
    });
  }
    return res.status(200).json({
            success:true,
          existingElectricities:electricities
   
      });
    
    });
});

//retrieve by id in the update form
router.route("/get/:id").get(async(req,res)=>{
    const fb = await Electricity.findById(req.params.id);

  if (fb) {
    res.json(fb);
  } else {
    res.status(404).json({ message: "Data not found" });
  }
})

//Update data
router.route("/update/:id").patch(async(req,res)=>{

    const fb = await Electricity.findById(req.params.id);

  if (fb) {
    fb.pannelSize = req.body.pannelSize || fb.pannelSize;
    fb.company = req.body.company ||  fb.company;
    fb.intensity = req.body.intensity || fb.intensity;
    fb.monthlyBill = req.body.monthlyBill || fb.monthlyBill;
    fb.units = req.body.units || fb.units;
    fb.irradiance = 5.0;
    fb.conversionEfficiency = 0.8;
   
    const updateElectricity = await fb.save();

    res.json({
        pannelSize: updateElectricity.pannelSize,
        company: updateElectricity.company,
        intensity: updateElectricity.intensity,
        monthlyBill: updateElectricity.monthlyBill,
        units: updateElectricity.units,
        irradiance: updateElectricity.irradiance,
        conversionEfficiency: updateElectricity.conversionEfficiency,
      });
    } else {
      res.status(404);
      throw new Error("Can't Update Details");
    }
  })

  // delete data
  router.route("/delete/:id").delete(async(req , res)=>{
    let electricityId = req.params.id;

 await Electricity.findByIdAndDelete(electricityId)
    .then(()=>{
        res.status(200).send({status: "Data deleted"})

    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete details", error: err.message });
    })
})
module.exports = router;