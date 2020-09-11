const mongoose = require('mongoose');
const idPlugin = require('mongoose-id');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imgs: {
    type: Array,
  },
  category: {
    type: String
  },
  tag: {
    type: String
  },
  desc: {
    type: String
  }
}, { autoCreate: true });

foodSchema.plugin(idPlugin);

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
