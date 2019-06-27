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
ActSchema.query.drafts = function() {
  return this.where({
    status: 'DRAFT'
  });
}; 

ActSchema.query.published = function() {
  return this.where({
    status: 'PUBLISHED'
  });
}; 

module.exports = mongoose.model('Act', ActSchema);