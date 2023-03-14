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

/**
 * A function that lists all restaurants with all information that is
 * in the file. 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function list_all(req, res)
{
    let objs = await Restaurant.getAll();
    console.log(objs.length+' item(s) sent.');
    res.send(objs);        
}

/**
 * A function that gets a restaurant by name and returns all
 * data of the requested contact. 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function get_restaurant(req, res)
{
    let name_to_match = req.params.name;
    let obj = await Restaurant.get(name_to_match);
    if (obj.length > 0){
        console.log(obj.length+' item(s) sent.');
        res.send(obj[0]);        
    }else{
        res.send('No item was found');
    }
    
}

/**
 * A function that deletes the information about a given restaurant.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function delete_restaurant(req, res)
{
    let name_to_match = req.params.name;
    let obj = await Restaurant.get(name_to_match);
    if (obj.length > 0){
        let msg = await Restaurant.delete(name_to_match);
        res.send(msg);        
    }else{
        res.send('No item was found');
    }
    
}
/**
 * A function to update the information about a given restaurant.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function update_restaurant(req, res) {
    let name = req.body.name;
    let cuisine = req.body.cuisine;
    let location = req.body.location;
    let new_restaurant = new Restaurant(name, cuisine, location);
    let msg = await new_restaurant.update(name, new_restaurant);
    res.send(msg);                
}
