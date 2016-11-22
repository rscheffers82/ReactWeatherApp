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
    that.setState({
      isLoading: true,
      errorMessage: undefined,
      temp: undefined,
      location: undefined
    });

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
  componentDidMount: function (){
    var location = this.props.location.query.location;
    if ( location && location.length > 0 ){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function (newProps) {        // used to refresh the component when it's props change. E.g. needed to make the search work on the main page.
    var location = newProps.location.query.location;
    if ( location && location.length > 0 ){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if ( isLoading ) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if ( location && temp ){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    return(
      <div className="text-center">
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
