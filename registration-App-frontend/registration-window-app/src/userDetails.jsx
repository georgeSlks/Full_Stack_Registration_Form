import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get the user ID from the URL

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();  // Get the user ID from the URL

  useEffect(() => {
    // Fetch the user details from the backend using the user ID
    fetch(`http://localhost:8080/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user details:', error));
  }, [id]);  // Fetch data again when the user ID changes

  if (!user) {
    return <div>Loading user details...</div>;
  }

  return (
    <div className="user-details">
      <h2>{user.name} {user.surname}</h2>
      <p><strong>Gender:</strong> {user.gender}</p>
      <p><strong>Birthdate:</strong> {user.birthdate}</p>
      <p><strong>Work Address:</strong> {user.workAddress}</p>
      <p><strong>Home Address:</strong> {user.homeAddress}</p>
    </div>
  );
};

export default UserDetails;
