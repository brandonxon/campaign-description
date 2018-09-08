const mongoose = require('mongoose');
const db = require('./index.js');

var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name: { type: String, require: true },
  text: String,
  images: [String],
  videos: [String],
  links: [String]
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;