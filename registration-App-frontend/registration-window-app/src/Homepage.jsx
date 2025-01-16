import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Homepage = () => {
  return (
    <div className="homepage">
      <h2>Welcome to the Homepage</h2>
      <nav>
        <ul>
          <li><Link to="/register">Register New User</Link></li>
          <li><Link to="/display-users">Display Users</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Homepage;
