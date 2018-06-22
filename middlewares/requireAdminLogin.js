const keys = require('../config/keys');

module.exports = (req, res, next) => {
    if(req.user.googleID !== keys.adminPass) {
        return res.status(401).send({error: 'Permission Denied!'});
    }

    next();
};
