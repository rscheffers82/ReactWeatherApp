var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    that.setState({isLoading: true});

    OpenWeatherMap.getTemp(location).then(function (temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function() {
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if ( isLoading ) {
        return <h3>Fetching weather...</h3>;
      } else if ( location && temp ){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return(
      <div>
        <h2>Weather page</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
