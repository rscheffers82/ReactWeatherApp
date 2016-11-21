var React = require('react');

/*
Because this component is not managing any state, just rendering information,
we can simplify the component with the below instead of the bottom one.
*/

var About = (props) => {
  return(
    <h3>About page</h3>
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
