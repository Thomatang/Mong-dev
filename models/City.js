const mongoose = require('mongoose');
const { Schema } = mongoose;

const citySchema = new Schema({
  name:String,
  numberOfMongs: Number
})

mongoose.model('cities', citySchema)
