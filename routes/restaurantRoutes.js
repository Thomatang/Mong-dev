const mongoose = require('mongoose');
const requireAdminLogin = require('../middlewares/requireAdminLogin');

const Restaurant = mongoose.model('restaurants');

module.exports = app => {

  app.post('/api/new_Mong', requireAdminLogin, (req,res) => {

    const {name, country, address, rating, tags, menu} = req.body;

    const restaurant = new Restaurant({
        name,
        address,
        country,
        menu:menu.split(',').map(item => {return {dish: item.trim()}}),
        _city: req.city.id
    });
    restaurant.save();
  })


};
