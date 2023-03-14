import { getGeoLocation } from '../utils/get-geo-data.mjs';
import { getWeatherData } from '../utils/get-weather-data.mjs';
import { getDb } from '../utils/db.mjs';

async function _get_contacts_collection (){
    let db = await getDb();
    return await db.collection('contacts');
};

/**
 * The class contact, with a main constructor and two methods
 * to add more fields retrieved with the third-party APIs
 */

class Contact {
    constructor(name, email, tel, address){
        this.name = name;
        this.email = email;
        this.tel = tel;
        this.address = address;
    }

    addGeoCoordinates(lat, lng, provider){
        this.lat = lat;
        this.lng = lng;
        this.provider = provider;
    }

    addWeatherData(temperature, feels_like, humidity){
        this.temperature = temperature;
        this.feels_like = feels_like;
        this.humidity = humidity;
    }
    /**
     * This method saves the current object Contact in the Database
     * @returns {String} - A message if contact was saved in the db or not
     */
    async save(){
        try{
            let geoData = await getGeoLocation(this.address);
            if (geoData != null){
                this.addGeoCoordinates(geoData[0],geoData[1],geoData[2]);
                let weatherData = await getWeatherData(geoData[0], geoData[1]);
                if (weatherData != null){
                    this.addWeatherData(weatherData.temp,weatherData.feels_like,weatherData.humidity);
                }
            } 
            let collection = await _get_contacts_collection();
            let mongoObj = await collection.insertOne(this);
            console.log('1 Contact was inserted in the database with id -> '+mongoObj.insertedId);
            return 'Contact correctly inserted in the Database.';            
        } catch(err){
            throw err
        }        
    }
    /**
     * This static method for the class Contact will retrieve
     * all the contacts inside the database
     * @returns {Array[Contact]} - An array with all contacts retrieved
     */
    static async getAll(){
        let collection = await _get_contacts_collection();
        let objs = await collection.find({}).toArray();
        return objs;                
    }
    /**
     * This method will retrieve a contact with the name passed
     * as a parameter
     * @param {String} name - the name of the contact to be retrieved
     * @returns {Contact} - An object Contact with all contact's data
     */
    static async get(name){
        let collection = await _get_contacts_collection();
        // console.log(name)
        let obj = await collection.find({"name": name}).toArray();
        return obj;
    }
    /**
     * This method will update the contact's data
     * @param {String} name - The name to be updated
     * @param {Contact} new_contact - An object of class Contact
     * @returns {String} A message if the contact was updated or not
     */
    static async update(name, new_contact){
        let collection = await _get_contacts_collection();
        let new_vals = {$set: {'name': new_contact.name, 'email': new_contact.email, 'tel': new_contact.tel, 'address': new_contact.address}};
        let obj = await collection.updateOne({'name': name}, new_vals)
        if (obj.modifiedCount > 0){
            return 'Contact correctly updated.';
        }else{
            return 'Contact was not updated'
        }        
    }
    /**
     * This method will detele the contact with the specified
     * name.
     * @param {String} name_to_delete - A name to be deleted
     * @returns {String} A message if the contact was deleted or not
     */
    static async delete(name_to_delete){
        let collection = await _get_contacts_collection();
        let obj = await collection.deleteOne({'name': name_to_delete})
        if (obj.deletedCount > 0){
            return 'Contact was deleted.'
        }else{
            return 'Contact was not found'
        }
    }
}

const _Contact = Contact;
export { _Contact as Contact };