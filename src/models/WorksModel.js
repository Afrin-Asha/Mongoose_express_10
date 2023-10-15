const mongoose = require('mongoose');

const worksSchema = new mongoose.Schema({
  title: { type: String},
  classNote: { type: String },
  description: { type: String },
  status: { type: String},
  email: { type: String},
});

const WorksModel = mongoose.model('Works', worksSchema);

module.exports = WorksModel;