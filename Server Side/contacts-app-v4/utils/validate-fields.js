let validator = require('validator');

let _validate_name = (name) => {
	return new Promise((resolve, reject) => {
		name = name.split(' ').join(''); //Removing blanks
		let is_valid = validator.isAlphanumeric(name);
		if (is_valid){
			resolve('The name is valid.');
		} else {
			reject('The name is invalid.');
		}
	});
};

let _validate_email = (email) => {
	return new Promise((resolve, reject) => {
		let is_valid = validator.isEmail(email);
		if (is_valid){
			resolve('The email is valid.');
		} else {
			reject('The email is invalid.');
		}
	});
};

let _validate_phone = (phone) => {
	return new Promise((resolve, reject) => {
		let is_valid = validator.isMobilePhone(phone);
		if (is_valid){
			resolve('The phone is valid.');
		} else {
			reject('The phone is invalid.');
		}
	});
};

let _validate_address = (address) =>{
	return new Promise((resolve, reject) => {
		let is_valid = true;
		if (is_valid){
			resolve('The address is valid.');
		} else {
			reject('The address is invalid.');
		}
	});
};

module.exports.validate_fields = (name, email, phone, address) => {
	return Promise.all([_validate_name(name), _validate_email(email), 
							_validate_phone(phone), _validate_address(address)])
		.then((values) => {
			return true;
		})
		.catch((err) => {
			console.log(err);
			return false;
		});
};

