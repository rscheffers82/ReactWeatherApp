var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
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
      that.setState({                 // success
        location: location,
        temp: temp,
        isLoading: false,
      });
    }, function (e) {                // error handling
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
      //alert(errorMessage);
    });
  },
  componentDidMount: function (){                         // When the component is mounted, set the URL to #/, this clears out and prior results, e.g. location=London
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
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage () {
      if ( isLoading ) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if ( location && temp ){
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError () {
      if ( typeof errorMessage === 'string' ) {
        return (
          <ErrorModal/>
        )
      }
    }

    return(
      <div className="text-center">
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
