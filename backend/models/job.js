const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobtitle: { type: String, required: true },
  compagny: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: false },
  country: { type: String, required: false },
  date: { type: Date, required: false },
  note: { type: String, required: true },
}, {
  timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;