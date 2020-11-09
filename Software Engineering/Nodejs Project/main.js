const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
//const errorController = require('./controllers/errorController');
const bodyParser = require('body-parser');
const User = require('./models/User');

const mongoose = require('mongoose');
//const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController')

  mongoose.connect('mongodb://localhost:27017/',
    { useUnifiedTopology: true,
      useNewUrlParser: true});
    const db = mongoose.connection;

    db.once('open', () => {
      console.log('Successfully connected to MongoDB using Mongoose!');
  });
  
  /*var users = new User({
      name: 'mark',
      gpa: '2.5'  
  });

users.save((error, savedDocument, next) => {
    if(error) next(error);
    console.log(savedDocument);
});*/

  console.log('pass 5');
  const path = require('path');

  app.set('views', path.join(__dirname, 'views'));

  app.use(express.static(__dirname + '/public'));
  app.set('port', process.env.PORT || 3000);
  app.use(express.json());
  app.set('view engine', 'ejs');
  app.use(layouts);
  app.use(bodyParser.json());

  app.use( bodyParser.urlencoded( {
    extended: false
  } ) );
  app.use( bodyParser.json() );

  console.log('pass 6');

  app.get('/', (req,res) => {
    res.render('index', {title: "Users"});
  });

  console.log('pass 7');
  app.get( '/users', userController.getAllUsers );
  app.get( '/newUsers', userController.getUserPage, userController.getAllUsers);
  app.post( '/newUsers', userController.saveUser);
  console.log('pass 8');
  app.listen(app.get("port"), () => {
    console.log( `Server running at http://localhost:${app.get('port')}` );
  });