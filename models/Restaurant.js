const mongoose = require('mongoose');
const { Schema } = mongoose;
const MenuItemSchema = require('./MenuItem');

const restaurantSchema = new Schema({
  name: String,
  _city: {Schema.Types.ObjectId, ref:'City'}, // each restaurant belongs to one city
  country: String,
  address: String,
  rating: { type: Number, min: 0, max: 10 },
  tags: [String],
  menu: [MenuItemSchema]

})

mongoose.model('restaurants', restaurantSchema)
