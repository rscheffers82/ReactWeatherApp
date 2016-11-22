var React = require('react');
var {Link} = require('react-router');

var Favorites = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">Favorite places</h1>
      <p>Click on one of the below cities to see what's the weather like.</p>
      <ul>
        <li>
          <Link to='/?location=London,UK'>London, UK</Link>
        </li>
        <li>
          <Link to='/?location=Picton,ON'>Picton, Ontario</Link>
        </li>
      </ul>
    </div>
  );
}

module.exports = Favorites;
