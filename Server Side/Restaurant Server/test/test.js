import assert from 'assert';
import { add, list_all, get_restaurant, get_cuisine, get_mood, get_rating, delete_restaurant, update_restaurant } from '../restaurant.js';
import { Restaurant } from '../model/restaurant.mjs';
import { add_users, list_all_users, get_user, delete_user, update_user } from './users.js';
import { Users } from require('./users.js');

describe('Restaurant functions', function() {
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

    describe('get_cuisine()', function() {
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
});