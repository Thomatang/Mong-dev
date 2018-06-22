const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenuItemSchema = new Schema ({
  name: String,
  ingredients: [String],
  description: String
});

module.exports = MenuItemSchema;
