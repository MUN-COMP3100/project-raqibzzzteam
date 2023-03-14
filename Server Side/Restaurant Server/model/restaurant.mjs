import { getDb } from '../utils/db.mjs';

async function get_restaurant_collection ()
{
    let db = await getDb();
    return await db.collection('restaurants');
};


/**
 * The class contact, with a main constructor and two methods
 * to add more fields retrieved with the third-party APIs
 */

class Restaurant 
{

    constructor(name, cuisine, location)
    {
        this.name = name;
        this.cuisine = cuisine;
        this.location = location;
    }

        /**
     * This method saves the current object Contact in the Database
     * @returns {String} - A message if contact was saved in the db or not
     */

    async save()
    {
        try
        {
            let collection = await get_restaurant_collection();
            let mongoObj = await collection.insertOne(this);
            console.log('1 Restaurant was inserted in the database with id -> '+mongoObj.insertedId);
            return 'Restaurant correctly inserted in the Database.';            
        } 
        catch(err)
        {
            throw err
        }        
    }

    /**
     * This static method for the class Contact will retrieve
     * all the contacts inside the database
     * @returns {Array[Contact]} - An array with all contacts retrieved
     */

    static async getAll()
    {
        try
        {
            let collection = await get_restaurant_collection();
            let restaurants = await collection.find({}).toArray();
            return restaurants;
        } 
        catch(err)
        {
            throw err;
        }
    }



}