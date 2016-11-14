import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="library" activeClassName="active">Library</Link>
    </nav>
  </div>
);

export default Header;

// Link: allowys you to  navigate to different routes in your application.
// IndexLink: the same as Link with the exception of OnlyActiveOnindex prop set on it
