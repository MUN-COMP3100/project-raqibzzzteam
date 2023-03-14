import express, { json, urlencoded } from 'express';
const app = express();
const port = 3000;

app.use(json());// support json encoded bodies
app.use(urlencoded({extended: true}));//incoming objects are strings or arrays

import {list_all, get_restaurant, add, update_restaurant, delete_restaurant} from './controller/restaurants.js';// Here we import our code with the restaurant operations
import { connectToDB, closeDBConnection } from './utils/db.mjs';

var server;

async function createServer(){
  try {
    // we will only start our server if our database
    // starts correctly. Therefore, let's wait for
    // mongo to connect
    await connectToDB();
    // contacts resource paths

    app.get('/restaurants', list_all);
    app.get('/restaurants/:name', get_restaurant);
    app.post('/restaurants', add);
    app.put('/restaurants/:name', update_restaurant);
    app.delete('/restaurants/:name', delete_restaurant);
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
