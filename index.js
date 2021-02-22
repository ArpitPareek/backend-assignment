//import express
const express = require('express');

//App initialization
const app = express();
const bodyParser = require('body-parser');
//import Mongoose
const mongoose = require('mongoose');


//import routes
const apiRoutes = require("./api-routes");

app.use('/api', apiRoutes);

//setup port
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello'));


//configuring bodyparser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const uri = 'mongodb+srv://arpitPareek:arpitpareek@cluster0.vs4yi.mongodb.net/Server?retryWrites=true&w=majority'

//setting a connection to db
mongoose.connect(uri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  //DB responses
  const connection = mongoose.connection;
  
  connection.once("open", () => console.log("DB is connected"));



app.listen(port, function () {
    console.log('Server is running on port ' + port);
})