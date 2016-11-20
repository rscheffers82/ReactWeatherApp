var React = require('react');
var ReactDOM = require('react-DOM');

// the below is only to test ES6 features
var objOne = {
  name: 'Roy Scheffers',
  location: 'Demorestville, ON'
};

var objTwo = {
  age: 34,
  ...objOne
};

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app...</h1>,
  document.getElementById('app')
);
