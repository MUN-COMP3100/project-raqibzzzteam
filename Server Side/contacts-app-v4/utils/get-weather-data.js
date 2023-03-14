const axios = require("axios");
/**
 * Requests Weather data in the OpenWeatherMap API
 * @param {Number} lat Latitude
 * @param {Number} lng Longitude
 */
module.exports.getWeatherData = (lat, lng) => {
    return new Promise((resolve, reject) => {
        let url = 'http://api.openweathermap.org/data/2.5/weather'
        let key = 'c95f697b42b184d0194c29bc8ac44641';
        let weatherData = axios.get(url+"?lat="+lat+"&lon="+lng+"&units=metric&appid="+key)
                            .then(res => {
                                return res.data.main;                    
                            }).catch(err => {
                                console.log(err);
                                return null;
                            });
        if (weatherData != null){
            resolve(weatherData);
        }else{
            reject(null);
        }
    });
};
    

