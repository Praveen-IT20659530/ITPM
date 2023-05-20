const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

const Schema = mongoose.Schema;
const SchemaTypes = mongoose.Schema.Types;

const electricitySchema = new Schema({
  pannelSize: {
    type: SchemaTypes.Double,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  intensity: {
    type: Number,
    required: true
  },
  monthlyBill: {
    type: SchemaTypes.Double,
    required: true
  },
  units: {
    type: Number,
    required: true
  },
  irradiance: {
    type: SchemaTypes.Double,
    default: 5.0
  },
  conversionEfficiency: {
    type: SchemaTypes.Double,
    default: 0.8
  }
});

const electricity = mongoose.model('Electricity', electricitySchema);
module.exports = electricity;
