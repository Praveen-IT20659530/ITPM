const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ResourceModelModel = model("EnergyAudit", EnergyAuditSchema);

module.exports = ResourceModelModel;
