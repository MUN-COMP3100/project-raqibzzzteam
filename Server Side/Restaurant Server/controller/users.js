import fs from 'fs' ;
import client from '../utils/db.mjs';
import { Users } from '../model/users.mjs';

/**
 * A function that adds a restaurant to the database.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function add(req, res)
{
    let username = req.body.username;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let dob = req.body.dob;
    let password = req.body.password;
    let new_user = new Users(username, firstname, lastname, email, dob, password);
    let msg = await new_user.save();
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
    let objs = await Users.getAll();
    console.log(objs.length+' item(s) sent.');
    res.send(objs);
}

/**
 * A function that gets a restaurant by name and returns all
 * data of the requested user. 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function get_user(req, res)
{
    let username_to_match = req.params.username;
    let obj = await Users.get(username_to_match);
    if (obj.length > 0){
        console.log(obj.length+' item(s) sent.');
        res.send(obj[0]);
    }else{
        res.send('No item was found');
    }
}

/**
 * A function that deletes the information about a given user.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function delete_user(req, res) 
{
    let username_to_match = req.params.username;
    let obj = await Users.get(username_to_match);
    if (obj.length > 0){
        let msg = await Users.delete(username_to_match);
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

export async function update_user(req, res)
{
    let username = req.body.username;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let dob = req.body.dob;
    let password = req.body.password;
    let new_user = new Users(username, firstname, lastname, email, dob, password);
    let msg = await new_user.update(username_to_match);
    res.send(msg);
}

