import React from 'react'
import { Link } from 'react-router-dom';

const Header =() => {
  return (
    <div>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/ProductPage">Product Page</Link>
            </li>
            <li>
              <Link to="/ProductDetail">Product Detail</Link>
            </li>
            <li>
              <Link to="/DashboardPage">Dashboard Page</Link>
            </li>
          </ul>
        </nav>
      </>
    </div>
  );
}

export default Header
