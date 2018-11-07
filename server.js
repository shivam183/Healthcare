//Calling All Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var passport = require('passport');
var route = require('./routes/routes');
const config = require('./config/database');
const Mockgoose = require('mockgoose').Mockgoose;
var mockgoose = new Mockgoose(mongoose);
const conn = require('./config/databaseConnection');



//Connect to mongoDB
/*if (process.env.NODE_ENV === 'test') {
    mockgoose.prepareStorage().then(() => {
        mongoose.connect(config.database, { useNewUrlParser: true }, (err) => {

            if (err) {
                console.log("Connection Failed" + err);
            }
            else {
                console.log("Test Connection Sucessful");
            }

        })
    })
}
else {
    mongoose.connect(config.database, { useNewUrlParser: true }, (err) => {

        if (err) {
            console.log("Connection Failed" + err);
        }
        else {
            console.log("Main DB Connection Sucessful");
        }
    })

}*/

conn.open();


//Use Express
var app = express();

//Adding Middleware
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Routes
app.use('/api', route);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Port Number
var port = 3000;

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Starting Server
app.listen(port, () => {
    console.log('Server started at port ' + port);
});