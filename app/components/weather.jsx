var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 89
    }
  },
  handleSearch: function (location) {
    var that = this
    OpenWeatherMap.getTemp(location).then(function (temp){
      that.setState({
        location: location,
        temp: temp
      })
    }, function (errorMessage) {
      alert(errorMessage);
    });
  },
  render: function() {
    var {location, temp} = this.state;

    return(
      <div>
        <h2>Weather page</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
