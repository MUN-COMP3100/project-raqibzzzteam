import { strictEqual, fail } from 'assert';
import { Contact } from '../model/contact.mjs';
import { validate_fields } from '../utils/validate-fields.mjs';
import axios from 'axios';
const create = axios.create;

var myurl = 'http://localhost:3000';           
// Let's configure the base url
const instance = create({
    baseURL: myurl,
    timeout: 5000, //5 seconds max
    headers: {'content-type': 'application/json'}
});

describe('Contacts App v4 - Tests with Mocha', function(){
    describe('Test Models', function(){
        describe('Contact', function(){
            let cname = 'Amilcar Soares';
            let cemail = 'amilcarsj@mun.ca';
            let ctel = '709-456-7891'
            let caddress = '230 Elizabeth Ave, St. John\'s, Newfoundland'
            var contact = new Contact(cname, cemail, ctel, caddress);       

            it('Test if user is invalid function (Invalid Email)', async function(){
                let c = new Contact(cname, 'amilcarsj@mun@ca.13', ctel, caddress);
                strictEqual(await validate_fields(c.name, c.email, c.tel, c.address), false);
            });
            it('Test if user is invalid function (Invalid Tel)', async function(){
                let c = new Contact(cname, cemail, '70X11122X2', caddress);
                strictEqual(await validate_fields(c.name, c.email, c.tel, c.address), false);
            });
        });
    });
    describe('Test API calls', function(){
        describe('Contacts', async function(){            
            it('Fail 1. POST - Test invalid name in the object', async function(){
                let data = {
                    name: '12Asj/@3_', 
                    email: 'amilcarsj@mun.ca', 
                    tel: '709-456-7891', 
                    address: '230 Elizabeth Ave, St. John\'s, Newfoundland'
                }
                let res = await instance.post('/contacts', data);
                strictEqual(res.data, 'Error. User not inserted in the database.');                
            });
            it('Fail 2. POST - Test invalid email in the object', async function(){
                let data = { 
                            name: 'Amilcar Soares', 
                            email: 'amilX@domain@x./@3_', 
                            tel: '709-456-7891', 
                            address: '230 Elizabeth Ave, St. John\'s, Newfoundland'
                        };
                let res = await instance.post('/contacts', data)
                strictEqual(res.data, 'Error. User not inserted in the database.');                
            });
            it('Fail 3. POST - Test invalid tel in the object', async function(){
                let data = { 
                    name: 'Amilcar Soares', 
                    email: 'amilcarsj@mun.ca', 
                    tel: 'InvalidXtel', 
                    address: '230 Elizabeth Ave, St. John\'s, Newfoundland'
                };
                let res = await instance.post('/contacts', data)
                strictEqual(res.data, 'Error. User not inserted in the database.');                
            });
            it('Fail 4. GET - /contacts/:name (No user with name)', async function(){
                let user_name = 'Someone Unknown';
                let res = await instance.get('/contacts/'+user_name)
                strictEqual(res.data,'No item was found');                  
            });
            it('Fail 5. DELETE - /contacts/:name (No user with name)', async function(){
                let user_name = 'Someone Unknown';
                let res = await instance.delete('/contacts/'+user_name);
                strictEqual(res.data,'Contact was not found');
            });
            it('Fail 6. PUT - /contacts/:name (No user with name)', async function(){
                let data = { 
                    name: 'Someone Unknown', 
                    email: 'amilcarsj@mun.ca', 
                    tel: 'InvalidXtel', 
                    address: '230 Elizabeth Ave, St. John\'s, Newfoundland'
                };
                let res = await instance.put('/contacts/'+data.name, data);
                strictEqual(res.data,'The new user data is not valid.');
            });
            it('Success 1. POST - Valid User, DELETE - User', async function(){
                let data = {
                    name: 'John Smith', 
                    email: 'jsmith@mun.ca', 
                    tel: '709-456-7891', 
                    address: '235 Forest Road, St. John\'s, Newfoundland'
                }
                let res_post = await instance.post('/contacts', data)
                strictEqual(res_post.data, 'Contact correctly inserted in the Database.');
                let res_del = await instance.delete('/contacts/'+data.name);
                strictEqual(res_del.data, 'Contact was deleted.');                
            });
            it('Success 2. POST - Valid User, GET - /contacts (Greater 0), DELETE - User', async function(){
                let data = { 
                    name: 'Amilcar Soares', 
                    email: 'amilcarsj@mun.ca', 
                    tel: '709-221-6612', 
                    address: '230 Elizabeth Ave, St. John\'s, Newfoundland'
                };
                let res_post = await instance.post('/contacts', data)
                let res_get = await instance.get('/contacts')
                if (res_get.data.length < 1 ) {
                    fail('There should be elements in the database');
                }
                let res_del = await instance.delete('/contacts/'+data.name);
                strictEqual(res_del.data, 'Contact was deleted.');                
            });
            it('Success 3. POST - Valid User, GET - :name, DELETE - User', async function(){
                let data = {
                    name: 'Bob Churchil', 
                    email: 'bchurchil@mun.ca', 
                    tel: '709-987-6543', 
                    address: '50 Crosbie Road, St. John\'s, Newfoundland'
                };
                let res_post = await instance.post('/contacts', data)
                let res_get = await instance.get('/contacts/'+data.name)
                strictEqual(res_get.data.name, data.name);
                strictEqual(res_get.data.email, data.email);
                strictEqual(res_get.data.tel, data.tel);
                strictEqual(res_get.data.address, data.address);
                let res_del = await instance.delete('/contacts/'+data.name);
                strictEqual(res_del.data, 'Contact was deleted.');                
            });
            it('Success 4. POST - Valid User, UPDATE - :name, GET - /:name, DELETE - User', async function(){
                let data = {
                    name: 'Robert Doe', 
                    email: 'rob@mun.ca', 
                    tel: '709-917-6643', 
                    address: '150 Torbay Road, St. John\'s, Newfoundland'
                };
                let up_data = {
                    name: 'Robert Doe Jr', 
                    email: 'robs@mun.ca', 
                    tel: '709-917-6643', 
                    address: '105 Torbay Road, St. John\'s, Newfoundland'
                };
                let res_post = await instance.post('/contacts', data)
                let res_put = await instance.put('/contacts/'+data.name, up_data);
                strictEqual(res_put.data,'Contact correctly updated.');
                let res_get = await instance.get('/contacts/'+up_data.name)
                strictEqual(res_get.data.name, up_data.name);
                strictEqual(res_get.data.email, up_data.email);
                strictEqual(res_get.data.tel, up_data.tel);
                strictEqual(res_get.data.address, up_data.address);
                let res_del = await instance.delete('/contacts/'+up_data.name);
                strictEqual(res_del.data, 'Contact was deleted.');                
            });            
        });        
    });
    
});