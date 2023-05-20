const express = require("express");
const router = express.Router();
const EnergyAudit = require("../model/EnergyAudit");


//find all Enargy Audit
router.get("/", async (req, res) => {
  res.json(await EnergyAudit.find().sort({ createdAt: -1 }).limit(20));
});

router.post("/audit", async (req, res) => {
  const { appliance, quantity, h, p, kwh, uid } = req.body;

  if (!appliance || !quantity || !h || !p || !kwh || !uid) {
    return res.status(400).json({ message: "fields are empty" });
  }
  const data = await EnergyAudit.create({
    appliance,
    quantity,
    h,
    p,
    kwh,
    uid,
  });
  res
    .status(201)
    .json({ message: "Resource created successfully", data: data });
});

//Update
router.put("/audit/update", async (req, res) => {
  const { appliance, quantity, h, p, kwh, id } = req.body;

  if (!appliance || !quantity || !h || !p || !kwh || !id) {
    return res.status(400).json({ message: " fields are empty" });
  }
  const data = await EnergyAudit.findById(id);
  await data.updateOne({
    appliance,
    quantity,
    h,
    p,
    kwh,
  });
  res.status(201).json({ message: "Resource update successfully", data: data });

  return;
});


//findby id by Enargy Audit
router.get("/audit/:id", async (req, res) => {
  const { id } = req.params;
  const data = await EnergyAudit.findById(id);
  res.json(data);
});




module.exports = router;
