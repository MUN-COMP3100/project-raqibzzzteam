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
     * This method saves the current object restaurant in the Database
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
     * This static method for the class restaurant will retrieve
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

    /**
     * This method will retrieve a restuarant with the name passed
     * as a parameter
     * @param {String} name - the name of the contact to be retrieved
     * @returns {Contact} - An object Contact with all contact's data
     */

    static async get(name)
    {
        let collection = await get_restaurant_collection();
        let obj = await collection.find({name: name}).toArray();
        return obj;
    }

    /**
     * This method will detele the contact with the specified
     * name.
     * @param {String} name_to_delete - A name to be deleted
     * @returns {String} A message if the contact was deleted or not
     */

    static async delete(name_to_delete)
    {
        let collection = await get_restaurant_collection();
        let obj = await collection.deleteOne({name: name_to_delete});
        if (obj.deletedCount > 0)
        {
            return 'Restaurant deleted';
        }
        else
        {
            return 'Restaurant not found';
        }
    }

}

const _Restaurant = Restaurant;
export { _Restaurant as Restaurant}