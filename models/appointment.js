const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Set up table - Mongoose schema
const appointmentSchema = new Schema({
  _id: { type: String},
  date: { type: String},
  firstName: { type: String},
  lastName: { type: String},
  email: { type: String},
  phone: { type: String},
  eventNotes: { type: String},
  questions: { type: String},
  terms: {type: Boolean},
  privacy: {type: Boolean},
  validateCheck: {type: Boolean}  
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;