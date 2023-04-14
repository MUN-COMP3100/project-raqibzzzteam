import { getDb } from '../utils/db.mjs';

async function get_restaurant_collection ()
{
    let db = await getDb();
    return await db.collection('reviews');
};


/**
 * The class Restaurant, with a main constructor and two methods
 * to add more fields retrieved with the third-party APIs
 */

class Reviews 
{

    constructor(restaurant, review)
    {
        this.restaurant = restaurant;
        this.review = review;
    }

        /**
     * This method saves the current object restaurant in the Database
     * @returns {String} - A message if user was saved in the db or not
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
        let reviews = await collection.find({}).toArray();
        return reviews;
    }

    static async get_Restaurant(restaurant_to_match)
    {
        let collection = await get_restaurant_collection();
        let restaurants = await collection.find({"Restaurant": restaurant_to_match}).toArray();
        return restaurants;
    }

    static async get_review(review_to_match)
    {
        let collection = await get_restaurant_collection();
        let reviews = await collection.find({"Review": review_to_match}).toArray();
        return reviews;
    }


    static async update(restaurant, new_reviews){
        let collection = await get_restaurant_collection();
        let new_vals = {$set: {'Restaurant': new_reviews.restaurant, 
                                'Review': new_reviews.review}}; 
        let obj = await collection.updateOne({'Restaurant': restaurant}, new_vals)
        if (obj.modifiedCount > 0){
            return 'Restaurant correctly updated';
        }else{
            return 'Restaurant was not updated';
        }

    }


    static async delete_review(name_to_delete)
    {
        let collection = await get_restaurant_collection();
        let obj = await collection.deleteOne({"Restaurant": name_to_delete});
        if (obj.deletedCount > 0)
        {
            return 'Review deleted';
        }
        else
        {
            return 'Review not found';
        }
    }

}

const _Reviews = Reviews;
export { _Reviews as Reviews}