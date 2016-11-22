var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var navSearch = this.refs.navSearch.value;
    var encodedNavSearch = encodeURIComponent(navSearch);

    if (navSearch.length > 0) {
      this.refs.navSearch.value = '';
      window.location.hash = '#/?location=' + encodedNavSearch;
    }

  },
  render: function(){
    // future improvement, toggle menu bar on mobile
    // Needs some js to work.
    // http://foundation.zurb.com/sites/docs/responsive-navigation.html
    return(

      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              ScheffersIT
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
            <li>
              <Link to="/favorites" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Favorites</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city..." ref="navSearch"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>

    );
  }
});

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
