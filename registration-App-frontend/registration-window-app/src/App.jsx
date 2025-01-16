import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes and Route for routing
import Homepage from './Homepage'; // Import the homepage component
import RegisterUser from './registerUser'; // Import the register user component
import DisplayUsers from './displayUsers'; // Import the display users component
import UserDetails from './userDetails'; // Import the user details component 
import './App.css';

const App = () => {
  return (
    <div>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Homepage route */}
        <Route path="/register" element={<RegisterUser />} /> {/* Register User route */}
        <Route path="/display-users" element={<DisplayUsers />} /> {/* Display Users route */}
        <Route path="/user/:id" element={<UserDetails />} /> {/* User details route */}
      </Routes>
    </div>
  );
};

export default App;
