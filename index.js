const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); // get access to cookies
const passport = require('passport'); // tell passport to make use of cookies
const keys = require('./config/keys');
require('./models/User');
require('./models/Restaurant');
require('./models/City');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/restaurantRoutes')(app);

//HEROKU Deployment configuration
if(process.env.NODE_ENV === 'production'){ // environment variable setup by heroku
// Express will serve up production assets
//like our main.js file, or main css file
app.use(express.static('client/build'));
//Express will serve up the index.html file if it does not recognize the route
const path = require('path');
app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
}

const PORT = process.env.PORT || 5000
app.listen(PORT);
