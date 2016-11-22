var React = require('react');
var ReactDOM = require('react-DOM');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Favorites = require('Favorites');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>                     // setup a route container
      <Route path="about" component={About}/>             // specify an about page
      <Route path="favorites" component={Favorites}/>     // specify a favorites page
      <IndexRoute component={Weather}/>                   // if none of the above can be found load Weather page (default page)
    </Route>
  </Router>
  ,
  document.getElementById('app')
);
