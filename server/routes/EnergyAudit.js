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




module.exports = router;
