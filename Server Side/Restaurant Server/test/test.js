//import { strictEqual, fail } from 'assert';
import { strictEqual, fail } from 'assert';
import { Restaurant } from '../model/restaurant.mjs';
import { add } from '../controller/restaurant.js'; // add this import statement
import { list_all } from '../controller/restaurant.js'; // add this import statement



import axios from 'axios';
const create = axios.create;

var myurl = 'http://localhost:3000/';
// Let's configure the base url
const instance = create({
    baseURL: myurl,
    timeout: 5000, //5 seconds max
    headers: {'content-type': 'application/json'}
});


describe('Users', function() {
    it('should add a new user to the database', async function() {
        let users = await Users.list_all();
        let initialLength = users.length;
        let newUser = new Users('johndoe2', 'John', 'Doe', 'johndoe2@example.com', '1985-07-22', 'Password123');
        await newUser.save();
        let updatedUsers = await Users.getAll();
        let updatedLength = updatedUsers.length;
        assert.equal(updatedLength, initialLength + 1);
    });
});
          
 