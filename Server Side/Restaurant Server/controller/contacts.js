import fs from 'fs';
const file_name = 'contacts_list.txt';
import { validate_fields } from '../utils/validate-fields.mjs';
import { getGeoLocation as get_geo } from '../utils/get-geo-data.mjs';
import { getWeatherData as get_weather } from '../utils/get-weather-data.mjs';
import client from '../utils/db.mjs';
import { Contact } from '../model/contact.mjs';

/**
 * A function that adds a contact to the database.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */

export async function add(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let tel = req.body.tel; 
    let address = req.body.address;
    let isValid = await validate_fields(name, email, tel, address);
    if (isValid){
        let new_contact = new Contact(name, email, tel, address);
        let msg = await new_contact.save();
        res.send(msg);                
    } else {
        console.log('The Contact was not inserted in the database since it is not valid.');
        res.send('Error. User not inserted in the database.');
    }
}

/**
 * A function that lists all contacts with all information that is
 * in the file. 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function list_all(req, res) {    
    let objs = await Contact.getAll();
    console.log(objs.length+' item(s) sent.');
    res.send(objs);        
}

/**
 * A function that gets a contact by name and returns all
 * data of the requested contact. 
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function get_contact(req, res) {
    let name_to_match = req.params.name;
    let obj = await Contact.get(name_to_match);
    if (obj.length > 0){
        console.log(obj.length+' item(s) sent.');
        res.send(obj[0]);        
    }else{
        res.send('No item was found');
    }
    
}

/**
 * A function to update the information about a given contact.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function update_contact(req, res) {
    let name_to_match = req.params.name;
    let new_name = req.body.name;
    let email = req.body.email;
    let tel = req.body.tel; 
    let address = req.body.address;
    let isValid = await validate_fields(new_name, email, tel, address);
    if (isValid){
        let msg = await Contact.update(name_to_match, new Contact(new_name, email, tel, address))
        res.send(msg);
    } else {
        console.log("The document was not updated");
        let msg = 'The new user data is not valid.';
        res.send(msg);
    }
}

/**
 * A function that deletes the information about a given contact.
 * @param {Request} req - A request Object
 * @param {Response} res - A response Object
 */
export async function delete_contact(req, res) {
    let name_to_delete = req.params.name;
    let msg = await Contact.delete(name_to_delete);
    res.send(msg);
}