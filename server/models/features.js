const mongoose = require('mongoose');

const featuresSchema = new mongoose.Schema({
  teamCode: { type: String, required: true },
  features: { type: Array, default: [] },
});

const Features = mongoose.model('features', featuresSchema);

module.exports = { Features };
