import assert from 'assert';
import { add, list_all, get_restaurant, get_restaurant_cuisine, get_mood, get_rating, delete_restaurant, update_restaurant } from '../restaurant.js';
import { Restaurant } from '../model/restaurant.mjs';
import { add_users, list_all_users, get_user, delete_user, update_user } from './users.js';
import { Users } from require('./users.js');

describe('Restaurant functions', function() {
    describe('add()', function() {
        it('should add a new restaurant', async function() {
            const req = {
                body: {
                    name: 'Restaurant 1',
                    cuisine: 'Italian',
                    location: 'New York',
                    mood: 'Casual',
                    ratings: 4.5
                }
            };
            const res = {
                send: function(msg) {
                    assert.equal(msg, 'Restaurant added successfully');
                }
            };
            await add(req, res);
        });
    });

    describe('list_all()', function() {
        it('should return a list of all restaurants', async function() {
            const res = {
                send: function(objs) {
                    assert.equal(Array.isArray(objs), true);
                }
            };
            await list_all(null, res);
        });
    });

    describe('get_restaurant()', function() {
        it('should get a restaurant by name', async function() {
            const req = {
                params: {
                    name: 'Restaurant 1'
                }
            };
            const res = {
                send: function(obj) {
                    assert.equal(obj.name, 'Restaurant 1');
                }
            };
            await get_restaurant(req, res);
        });
    });

    describe('get_restaurant_cuisine()', function() {
        it('should get a restaurant by cuisine', async function() {
            const req = {
                params: {
                    cuisine: 'Italian'
                }
            };
            const res = {
                send: function(obj) {
                    assert.equal(obj.cuisine, 'Italian');
                }
            };
            await get_restaurant_cuisine(req, res);
        });
    });

    describe('get_mood()', function() {
        it('should get a restaurant by mood', async function() {
            const req = {
                params: {
                    mood: 'Casual'
                }
            };
            const res = {
                send: function(obj) {
                    assert.equal(obj[0].mood, 'Casual');
                }
            };
            await get_mood(req, res);
        });
    });

    describe('get_rating()', function() {
        it('should get a restaurant by rating', async function() {
            const req = {
                params: {
                    rating: 4.5
                }
            };
            const res = {
                send: function(obj) {
                    assert.equal(obj[0].ratings, 4.5);
                }
            };
            await get_rating(req, res);
        });
    });

    describe('delete_restaurant()', function() {
        it('should delete a restaurant by name', async function() {
            const req = {
                params: {
                    name: 'Restaurant 1'
                }
            };
            const res = {
                send: function(msg) {
                    assert.equal(msg, 'Restaurant deleted successfully');
                }
            };
            await delete_restaurant(req, res);
            const obj = await Restaurant.get_name('Restaurant 1');
            assert.equal(obj.length, 0);
        });
    });

    describe('update_restaurant()', function() {
        it('should update a restaurant by name', async function() {
            const req = {
                params: {
                    name: 'Restaurant 1'
                },
                body: {
                    name: 'Restaurant 1',
                    cuisine: 'Italian',
                    location: 'New York',
                    mood: 'Casual',
                    ratings: 4.5
                }
            };
            const res = {
                send: function(msg) {
                    assert.equal(msg, 'Restaurant updated successfully');
                }
            };
            await update_restaurant(req, res);
        });
    });
});

describe('Restaurant', () => {
  let testRestaurant;

  beforeEach(() => {
    // Create a new Restaurant object before each test
    testRestaurant = new Restaurant(
      'Test Restaurant',
      'Test Cuisine',
      'Test Location',
      'Test Mood',
      4.5
    );
  });

  describe('#save()', () => {
    it('should save a new restaurant to the database', async () => {
      const result = await testRestaurant.save();
      assert.strictEqual(result, 'Restaurant correctly inserted in the Database.');
    });
  });

  describe('#getAll()', () => {
    it('should return an array of all restaurants in the database', async () => {
      const result = await Restaurant.getAll();
      assert(Array.isArray(result));
      assert(result.length > 0);
      assert(result[0] instanceof Restaurant);
    });
  });

  describe('#get_name()', () => {
    it('should return an array of restaurants with the matching name', async () => {
      const result = await Restaurant.get_name('Test Restaurant');
      assert(Array.isArray(result));
      assert(result.length > 0);
      assert.strictEqual(result[0].name, 'Test Restaurant');
    });
  });

  describe('#get_cuisine()', () => {
    it('should return an array of restaurants with the matching cuisine', async () => {
      const result = await Restaurant.get_cuisine('Test Cuisine');
      assert(Array.isArray(result));
      assert(result.length > 0);
      assert.strictEqual(result[0].cuisine, 'Test Cuisine');
    });
  });

  describe('#get_mood()', () => {
    it('should return an array of restaurants with the matching mood', async () => {
      const result = await Restaurant.get_mood('Test Mood');
      assert(Array.isArray(result));
      assert(result.length > 0);
      assert.strictEqual(result[0].mood, 'Test Mood');
    });
  });

  describe('#get_rating()', () => {
    it('should return an array of restaurants with the matching rating', async () => {
      const result = await Restaurant.get_rating(4.5);
      assert(Array.isArray(result));
      assert(result.length > 0);
      assert.strictEqual(result[0].rating, 4.5);
    });
  });

  describe('#update()', () => {
    it('should update a restaurant in the database with new values', async () => {
      const newRestaurant = new Restaurant(
        'New Restaurant',
        'New Cuisine',
        'New Location',
        'New Mood',
        4.0
      );
      await testRestaurant.save();
      const result = await Restaurant.update('Test Restaurant', newRestaurant);
      assert.strictEqual(result, 'Restaurant correctly updated');
    });
  });

  describe('#delete()', () => {
    it('should delete a restaurant from the database', async () => {
      await testRestaurant.save();
      const result = await Restaurant.delete('Test Restaurant');
      assert.strictEqual(result, 'Restaurant deleted');
    });

    it('should return a message if the restaurant is not found', async () => {
      const result = await Restaurant.delete('Nonexistent Restaurant');
      assert.strictEqual(result, 'Restaurant not found');
    });
  });
});

describe('users.js', function() {
  describe('add_users()', function() {
    it('should add a new user to the database', async function() {
      let req = {
        body: {
          username: 'testuser',
          firstname: 'Test',
          lastname: 'User',
          email: 'testuser@example.com',
          dob: '2000-01-01',
          password: 'testpassword'
        }
      };
      let res = {
        send: function(msg) {
          assert.equal(msg, 'User added successfully');
        }
      };
      await add_users(req, res);
    });
  });

  describe('list_all_users()', function() {
    it('should list all users in the database', async function() {
      let req = {};
      let res = {
        send: function(objs) {
          assert.equal(objs.length, 1);
          assert.equal(objs[0].username, 'testuser');
          assert.equal(objs[0].firstname, 'Test');
          assert.equal(objs[0].lastname, 'User');
          assert.equal(objs[0].email, 'testuser@example.com');
          assert.equal(objs[0].dob, '2000-01-01');
          assert.equal(objs[0].password, 'testpassword');
        }
      };
      await list_all_users(req, res);
    });
  });

  describe('get_user()', function() {
    it('should get a user by username', async function() {
      let req = {
        params: {
          username: 'testuser'
        }
      };
      let res = {
        send: function(obj) {
          assert.equal(obj.username, 'testuser');
          assert.equal(obj.firstname, 'Test');
          assert.equal(obj.lastname, 'User');
          assert.equal(obj.email, 'testuser@example.com');
          assert.equal(obj.dob, '2000-01-01');
          assert.equal(obj.password, 'testpassword');
        }
      };
      await get_user(req, res);
    });
  });

  describe('delete_user()', function() {
    it('should delete a user by username', async function() {
      let req = {
        params: {
          username: 'testuser'
        }
      };
      let res = {
        send: function(msg) {
          assert.equal(msg, 'User deleted successfully');
        }
      };
      await delete_user(req, res);
    });
  });

  describe('update_user()', function() {
    it('should update a user by username', async function() {
      let req = {
        body: {
          username: 'testuser',
          firstname: 'Updated',
          lastname: 'User',
          email: 'testuser@example.com',
          dob: '2000-01-01',
          password: 'updatedpassword'
        }
      };
      let res = {
        send: function(msg) {
          assert.equal(msg, 'User updated successfully');
        }
      };
      await update_user(req, res);
    });
  });
});

describe('Users', function() {
    describe('#save()', function() {
        it('should save a user in the database', async function() {
            const user = new Users('johnDoe', 'John', 'Doe', 'johndoe@example.com', '01-01-1990', 'password');
            const result = await user.save();
            assert.strictEqual(result, 'User correctly inserted in the Database.');
        });
    });
    
    describe('#findByUsernameAndPassword()', function() {
        it('should return a user with matching username and password', async function() {
            const username = 'johnDoe';
            const password = 'password';
            const user = await Users.findByUsernameAndPassword(username, password);
            assert.strictEqual(user.Username, username);
            assert.strictEqual(user.Password, password);
        });
        
        it('should return null if no user is found with matching username and password', async function() {
            const username = 'janeDoe';
            const password = 'password';
            const user = await Users.findByUsernameAndPassword(username, password);
            assert.strictEqual(user, null);
        });
    });
    
    describe('#getAll()', function() {
        it('should return an array with all users in the database', async function() {
            const users = await Users.getAll();
            assert.strictEqual(Array.isArray(users), true);
        });
    });
    
    describe('#get()', function() {
        it('should return an array with users that match the given username', async function() {
            const username = 'johnDoe';
            const users = await Users.get(username);
            assert.strictEqual(Array.isArray(users), true);
            assert.strictEqual(users[0].Username, username);
        });
    });
    
    describe('#update()', function() {
        it('should update a user with new values', async function() {
            const username = 'johnDoe';
            const new_user = new Users('johnDoe', 'John', 'Doe', 'johndoe@example.com', '01-01-1990', 'new_password');
            const result = await Users.update(username, new_user);
            assert.strictEqual(result, 'User updated successfully');
            const updated_user = await Users.get(username);
            assert.strictEqual(updated_user[0].Password, new_user.password);
        });
        
        it('should return "User was not updated" if no user is found with the given username', async function() {
            const username = 'janeDoe';
            const new_user = new Users('janeDoe', 'Jane', 'Doe', 'janedoe@example.com', '01-01-1990', 'new_password');
            const result = await Users.update(username, new_user);
            assert.strictEqual(result, 'User was not updated');
        });
    });
    
    describe('#delete()', function() {
        it('should delete a user with the given username', async function() {
            const username = 'johnDoe';
            const result = await Users.delete(username);
            assert.strictEqual(result, 'User deleted successfully');
            const deleted_user = await Users.get(username);
            assert.strictEqual(deleted_user.length, 0);
        });
        
        it('should return "User was not deleted" if no user is found with the given username', async function() {
            const username = 'janeDoe';
            const result = await Users.delete(username);
            assert.strictEqual(result, 'User was not deleted');
        });
    });
});


