import { getDb } from '../utils/db.mjs'

async  function get_restaurant_collection (){
    let db = await getDb();
    return await db.collection('users');
}

/**
 * The class Users, with a main constructor and two methods
 * to add more fields retrieved with the third-party APIs
 */

class Users 
{
    constructor(username, firstname, lastname, email, dob, password)
    {
        this.username = username
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.dob = dob;
        this.password = password;
    }

     /**
     * This method saves the current object user in the Database
     * @returns {String} - A message if user was saved in the db or not
     */

    async save()
    {
        try
        {
            let collection = await get_restaurant_collection();
            let mongoObj = await collection.insertOne(this);
            console.log('1 User was inserted in the database with id -> '+mongoObj.insertedId);
            return 'User correctly inserted in the Database.';            
        } 
        catch(err)
        {
            throw err
        }        
    }

    /**
     * This static method for the class users will compare
     * the username and password the user inputs with the username and password inside the database
     */
    static async findByUsernameAndPassword(username, password) {
        let collection = await get_restaurant_collection();
        let user = await collection.findOne({ "Username": username, "Password": password });
        return user;
    }

    /**
     * This static method for the class users will retrieve
     * all the contacts inside the database
     * @returns {Array[Contact]} - An array with all contacts retrieved
     */

    static async getAll()
    {
        let collection = await get_restaurant_collection();
        let users = await collection.find({}).toArray();
        return users;
    }

    static async get(username)
    {
        let collection = await get_restaurant_collection();
        let usernames = await collection.find({"Username": username}).toArray();
        return usernames;
    }

    static async update(username, new_user){
        let collection = await get_restaurant_collection();
        let new_vals = {$set:  {'Username': new_user.username, 'Firstname': new_user.firstname, 
                                'Lastname': new_user.lastname, 'Email': new_user.email, 'DOB': new_user.dob, 
                                'Password': new_user.password}};
        let obj = await collection.updateOne({'Username': username}, new_vals)
        if (obj.modifiedCount > 0){
            return 'User updated successfully';
        }else{
            return 'User was not updated';
        }
    }
    
    static async delete(username_to_delete){
        let collection = await get_restaurant_collection();
        let obj = await collection.deleteOne({"Username": username_to_delete});
        if (obj.deletedCount > 0){
            return 'User deleted successfully';
        }else{
            return 'User was not deleted';
        }
    }
}

const _Users = Users;
export { _Users as Users };