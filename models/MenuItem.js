const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenuItemSchema = new Schema ({
  dish: String,
  ingredients: [String],
  description: String
});

module.exports = MenuItemSchema;
