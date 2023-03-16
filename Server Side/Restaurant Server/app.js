import express, { json, urlencoded } from 'express';
const app = express();
const port = 3000;

app.use(json());// support json encoded bodies
app.use(urlencoded({extended: true}));//incoming objects are strings or arrays

import {list_all, get_restaurant, add, update_restaurant, delete_restaurant} from './controller/restaurant.js';// Here we import our code with the restaurant operations
import { connectToDB, closeDBConnection } from './utils/db.mjs';

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
    app.post('/restaurant', add);
    app.put('/restaurant/:name', update_restaurant);
    app.delete('/restaurant/:name', delete_restaurant);
    app.get('/users', list_all);
    app.get('/users/:username', get_restaurant);
    app.post('/users', add);
    app.put('/users/:username', update_restaurant);
    app.delete('/users/:username', delete_restaurant);
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
