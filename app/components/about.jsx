var React = require('react');

/*
Because this component is not managing any state, just rendering information,
we can simplify the component with the below instead of the bottom one.
*/

var About = (props) => {
  return(
      <div>
        <h1 className="text-center">About</h1>
        <p>
          This is a weather application build on React.
        </p>

        <p>
          It weather app is an improvement of an earlier one I build during the Front End Web Developer course on <a href="https://www.freecodecamp.com/rscheffers82" target="_blank">FreeCodeCamp</a>. On <a href="http://codepen.io/roycode/details/WwqYrB" target="_blank">CodePen</a> you will find the initial version I made.
        </p>

        <p>
          Interested in the magic behind this project, check out the <a href="https://github.com/rscheffers82/Weather-react" target="_blank">repo</a>
           on GitHub
        </p>

        <p>
          Do you want to know if you need <img className="icon" src="images/shades-smiley.png"/> or an <img className="icon" src="images/umbrella.png"/> today, go ahead and search the weather for your city or try one of the favorte locations around the world
        </p>

        <p>
          Here are some of the tools I've used
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react" target="_blank">React</a> - This was the JavaScript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
          </li>
        </ul>
      </div>
  );
}

module.exports = About;

/*

var About = React.createClass({
  render: function(){
    return(
      <h3>About page</h3>
    );
  }
});

module.exports = About;
*/
