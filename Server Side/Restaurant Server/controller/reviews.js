import fs from  'fs' ;
import client from '../utils/db.mjs';
import { Reviews } from '../model/reviews.mjs';


/**
 * A function that adds a restaurant to the database.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function add(req, res) 
{
    let restaurant = req.body.restaurant;
    let review = req.body.review;
    let new_restaurant = new Restaurant(restaurant, review);
    let msg = await new_review.save();
    res.send(msg);                
}

/**
 * A function that lists all restaurants with all information that is
 * in the file. 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function list_all_reviews(req, res)
{
    let objs = await Reviews.getAll();
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
    let obj = await Reviews.get_restaurant(name_to_match);
    if (obj.length > 0){
        console.log(obj.length+' item(s) sent.');
        res.send(obj[0]);        
    }else{
        res.send('No item was found');
    }
    
}

export async function get_review(req, res) {
    let cuisine_to_match = req.params.cuisine; // use req.params.cuisine instead of req.params.name
    let obj = await Reviews.get_review(cuisine_to_match);
    if (obj.length > 0){
        console.log(obj.length+' item(s) sent.');
        res.send(obj[0]);        
    } else {
        res.send('No item was found');
    }
  }

/**
 * A function that deletes the information about a given restaurant.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function delete_review(req, res)
{
    let name_to_match = req.params.name;
    let obj = await Reviews.get_restaurant(name_to_match);
    if (obj.length > 0){
        let msg = await Reviews.delete_review(name_to_match);
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
    let restaurant = req.body.restaurant;
    let review = req.body.review;
    let new_review = new Reviews(restaurant, review);
    let msg = await new_review.update();
    res.send(msg);                
}
