const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');

const moviesRoute = require('./routes/movies.route');

//const passport = require("passport");

//const users = require("./routes/users");

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);



app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Passport middleware
//app.use(passport.initialize());

// Passport config
//require("./config/passport")(passport);

// Routes
//app.use("/api/users", users);


app.use('/movies', moviesRoute);

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
});
