var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return(
    <div>
      <h2>Nav...</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/favorites" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Favorites</Link>
    </div>
  );
}

module.exports = Nav;

/* old way or constructing a module
var Nav = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Nav...</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/favorites" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Favorites</Link>
      </div>
    );
  }
});
*/
