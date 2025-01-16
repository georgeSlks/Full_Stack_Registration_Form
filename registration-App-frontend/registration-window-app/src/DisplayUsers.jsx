import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const DisplayUsers = () => {
  // Initial state for users
  const [users, setUsers] = useState([]);

  // Fetch users from the backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:8080/api/users')  // backend is running at this URL
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Handle deleting a user
  const handleDelete = (id) => {
    // Send a DELETE request to the backend
    fetch(`http://localhost:8080/api/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted user from the state
          setUsers(users.filter((user) => user.id !== id));
        } else {
          alert('Failed to delete user');
        }
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        alert('There was an error deleting the user');
      });
  };

  return (
    <div className="display-users">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Render the users dynamically from the state */}
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>
                {/* Link to the user details page */}
                <Link to={`/user/${user.id}`}>View</Link> |
                {/* Delete button */}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayUsers;
