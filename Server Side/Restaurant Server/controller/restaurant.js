import fs from  'fs' ;
import client from '../utils/db.mjs';
import { Restaurant } from '../model/restaurant.mjs';


/**
 * A function that adds a restaurant to the database.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function add(req, res) 
{
    let name = req.body.name;
    let cuisine = req.body.cuisine;
    let location = req.body.location;
    let new_restaurant = new Restaurant(name, cuisine, location);
    let msg = await new_restaurant.save();
    res.send(msg);                
}

export async function update_restarant(req, res) {
    let name = req.body.name;
    let cuisine = req.body.cuisine;
    let location = req.body.location;
    let new_restaurant = new Restaurant(name, cuisine, location);
    let msg = await new_restaurant.update();
    res.send(msg);                
}