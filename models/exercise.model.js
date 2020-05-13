const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: { type: String, required: true },
  location: { type: String, required: true },
  transportation: { type: String, required: true },
  hotel: { type: String, required: true },
  passengers: { type: Number, required: true },
  days: { type: Number, required: true },
  startdate: { type: Date, required: true },
  enddate: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
