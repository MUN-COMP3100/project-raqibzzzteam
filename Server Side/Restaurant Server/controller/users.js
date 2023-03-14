import fs from  'fs' ;
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
    let password = req.body.password;
    let email = req.body.email;
    let new_user = new Users(username, password, email);
    let msg = await new_user.save();
    res.send(msg);

}