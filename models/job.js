const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobtitle: { type: String, required: true },
  company: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  country: { type: String, required: false },
  link: { type: String, required: false },
  status: { type: String, required: false },
  note: { type: String, required: false },
}, {
  timestamps: true,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;