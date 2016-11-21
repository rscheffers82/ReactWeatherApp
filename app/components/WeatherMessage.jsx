var React = require('react');

// var WeatherMessage = (props) => {
//  var {temp, location} = props;

// ES6 allows for destructuring right inside the () instead of using the above
// Ensure you add the {} inside as you see below

var WeatherMessage = ( {temp, location} ) => {
  return(
    <h3 className="text-center">It's {temp} °C in {location}</h3>
  );
}

module.exports = WeatherMessage;

/*
var WeatherMessage = React.createClass({
  render: function() {
    var {temp, location} = this.props;
    return(
      <h2>It's {temp} °C in {location}</h2>
    );
  }
});
*/
