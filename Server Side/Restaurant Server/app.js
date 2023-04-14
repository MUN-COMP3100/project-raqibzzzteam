import express, { json, urlencoded } from 'express';
const app = express();
const port = 3001;

import cors from "cors";
app.use(cors()); // allow cross-origin requests
app.use(json()); // support json encoded bodies
app.use(urlencoded({ extended: true })); //incoming objects are strings or arrays

app.use(json());// support json encoded bodies
app.use(urlencoded({extended: true}));//incoming objects are strings or arrays

import { list_all_users, get_user, add_users, update_user, delete_user} from './controller/users.js';
import {list_all, 
        get_restaurant, 
        add, 
        update_restaurant, 
        delete_restaurant,
        get_cuisine,
        get_mood,
        get_rating} from './controller/restaurant.js';// Here we import our code with the restaurant operations
import { get_Restaurant, get_review, list_all_reviews } from './controller/reviews.js'
import { connectToDB, closeDBConnection } from './utils/db.mjs';
import { Users } from './model/users.mjs'; // import the Users model

import { dirname } from 'path'
import { fileURLToPath } from 'url';
const __dirname = dirname (fileURLToPath (import. meta.url)) ;
app.use (express.static(__dirname + '/view'));

var server;

async function createServer(){
  try {
    // we will only start our server if our database
    // starts correctly. Therefore, let's wait for
    // mongo to connect
    await connectToDB();
    // contacts resource paths

    app.get('/restaurant', list_all);
    app.get('/restaurant/:name', get_restaurant);
    app.get('/restaurant/cuisine/:cuisine', get_cuisine);
    app.post('/restaurant', add);
    app.put('/restaurant/:name', update_restaurant);
    app.delete('/restaurant/:name', delete_restaurant);

    app.get('/restaurant/mood/:mood', get_mood);
    app.get('/restaurant/rating/:rating', get_rating);
    
    app.get('/users', list_all_users);
    app.get('/users/:username', get_user);
    app.post('/users', add_users);
    app.put('/users/:username', update_user);
    app.delete('/users/:username', delete_user);

    app.get('/reviews', list_all_reviews);
    app.get('/reviews/restaurant/:restaurant', get_Restaurant);
    app.get('/reviews/:review', get_review);
    //app.post('/reviews', add_users);
    //app.put('/reviews/:username', update_user);
    //app.delete('/reviews/:username', delete_user);

    // define the route handler for the '/login' endpoint
    app.post('/login', async (req, res) => {
      let username = req.body.username;
      let password = req.body.password;
    
      let user = await Users.findByUsernameAndPassword(username, password);
    
      if (user) {
        // User found, log them in
        res.send('User logged in successfully');
      } else {
        // User not found or incorrect password
        res.send('Incorrect username or password');
      }
    });

    // start the server
    server = app.listen(port, () => {
      console.log('Example app listening at http://localhost:%d', port);
    });
  }catch(err){
    console.log(err)
  }
}
createServer();

process.on('SIGINT', () => {
  console.info('SIGINT signal received.');
  console.log('Closing Mongo Client.');
  server.close(async function(){
    let msg = await closeDBConnection()   ;
    console.log(msg);
  });
});
