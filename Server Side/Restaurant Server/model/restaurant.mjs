import { getDb } from '../utils/db.mjs';

async function get_restaurant_collection ()
{
    let db = await getDb();
    return await db.collection('stjohns');
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

        let collection = await get_restaurant_collection();
        let restaurants = await collection.find({}).toArray();
        return restaurants;
    }

    static async update(name, new_restaurant){
        let collection = await get_restaurant_collection();
        let new_vals = {$set: {'name': new_restaurant.name, 'cuisine': new_restaurant.cuisine, 'location': new_restaurant.location}};
        let obj = await collection.updateOne({'name': name}, new_vals)
        if (obj.modifiedCount > 0){
            return 'Restaurant correctly updated';
        }else{
            return 'Restaurant was not updated';
        }

    }


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