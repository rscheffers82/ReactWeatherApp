var axios = require('axios');

const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c83e26f8dc284b23accba92973babfde&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${WEATHER_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
    .then(function (res) {
      if (res.data.cod && res.data.message){  // additional error checking due to API data return
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;            // return the temp
      }
    }, function (res) {                       // promise is not fulfilled, error
      throw new Error(res.data.message);
    });
  }
}
