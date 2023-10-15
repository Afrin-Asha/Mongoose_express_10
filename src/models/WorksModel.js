const mongoose = require('mongoose');

const worksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  classNote: { type: String },
  description: { type: String, required: true },
  status: { type: String, required: true },
  email: { type: String, required: true },
});

const WorksModel = mongoose.model('Works', worksSchema);

module.exports = WorksModel;