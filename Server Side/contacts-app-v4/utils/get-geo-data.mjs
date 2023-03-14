import axios from "axios"; 
const get = axios.get


// Geocoding based on users address

/**
 * Requests the Geolocation of a contact based on the address provided.
 * This request is done in the MapQuestAPI
 * @param {String} address: The contact's address
 */
var getAddressMapQuestAPI = (address) => {
	return new Promise((resolve, reject) => {
		let url = 'http://open.mapquestapi.com/geocoding/v1/address';
		let key = 'f38yT45d6AtUYlLtitjAiHBWRi4pA0Vu';
		let geoData = get(url+"?key="+key+"&location="+address)
						.then(res => {
							let lat = res.data.results[0].locations[0].latLng.lat;
							let lng = res.data.results[0].locations[0].latLng.lng;
							return [lat, lng, 'MapQuest'];
						}).catch(err => {
							// console.log(err);
							return null;
						});
		if (geoData != null){
			resolve(geoData);
		} else {
			reject('Geographical coordinates were not found');
		}
	});
};
/**
 * Requests the Geolocation of a contact based on the address provided.
 * This request is done in the PositionStack API
 * @param {String} address: The contact's address
 */
var getAddressPositionStackAPI = (address) => {
	return new Promise((resolve, reject) => {
		let url = 'http://api.positionstack.com/v1/forward'
		let key = '0d2fbf39cb90ac6cd5267076d7b2afb0';
		let geoData = get(url+"?access_key="+key+"&query="+address)
						.then(res => {
							let lat = res.data.data[0].latitude;
							let lng = res.data.data[0].longitude;
							return [lat, lng, 'PositionStack'];							
						}).catch(err => {
							// console.log(err);
							return null;
						});
		if (geoData != null){
			resolve(geoData);
		} else {
			reject('Geographical coordinates were not found.');
		}
	});
};

/**
 * This function creates a promise race between the two Geocoding providers.
 * @param {String} address: The contact's address.
 */
export function getGeoLocation(address) {

	return Promise.race([getAddressMapQuestAPI(address), getAddressPositionStackAPI(address)])
		.then(winnerData => {
			return winnerData;
		})
		.catch(err => {
			console.log(err);
			return null;
		});

}


