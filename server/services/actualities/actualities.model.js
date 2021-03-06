'use strict';

// get an instance of mongoose and mongoose.Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('actualities', new Schema({
  title: { type : String, required: true },
  color: { type : String, default: '#000000' },
  message: { type : String, required: true },
  attachment: {type: String},
  dropboxPath: {type: String}
}, {timestamps: true}));
