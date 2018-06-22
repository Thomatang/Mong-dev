const requireAdminLogin = require('../middlewares/requireAdminLogin');

module.exports = app => {

  app.post('/api/new_Mong', requireAdminLogin, (req,res) => {

  })


};
