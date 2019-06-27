const mongoose = require('mongoose');

// Our Schema
const ActSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['PENDING', 'ACCOMPLISHED'],
    default: 'PENDING'
  }
}, {
  timestamps: true
});

//Query Helper
ActSchema.query.pendings = function() {
  return this.where({
    status: 'PENDING'
  });
}; 

ActSchema.query.accomplished = function() {
  return this.where({
    status: 'ACCOMPLISHED'
  });
}; 

module.exports = mongoose.model('Act', ActSchema);