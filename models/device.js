const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  category: String,
  quantity: Number,
  condition: String,
  notes: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Device', deviceSchema);

// multiple schemas?