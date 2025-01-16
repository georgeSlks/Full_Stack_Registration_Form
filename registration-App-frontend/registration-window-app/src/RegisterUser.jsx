import React, { useState } from 'react';
import './App.css';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    gender: '',
    birthdate: '',
    workAddress: '',
    homeAddress: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation: Ensure required fields are filled in
    Object.keys(formData).forEach(field => {
      if (!formData[field] && (field !== "workAddress" && field !== "homeAddress")) {
        newErrors[field] = `${field} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if validation fails
    } else {
      // Submit the form data to the backend API
      fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          surname: formData.surname,
          gender: formData.gender,
          birthdate: formData.birthdate,
          workAddress: formData.workAddress,
          homeAddress: formData.homeAddress,
        }),
      })
        .then((response) => response.json()) // Parse the response JSON
        .then((data) => {
          if (data.id) {
            console.log("User created:", data);
            alert("User created successfully!");
          } else {
            console.error("Unexpected response:", data);
            alert("Something went wrong! Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error creating the user.");
        });
    }
  };

  return (
    <div className="form-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
          {errors.surname && <span className="error">{errors.surname}</span>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div className="form-group">
          <label>Birthdate:</label>
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required
          />
          {errors.birthdate && <span className="error">{errors.birthdate}</span>}
        </div>

        <div className="form-group">
          <label>Work Address:</label>
          <textarea
            name="workAddress"
            value={formData.workAddress}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Home Address:</label>
          <textarea
            name="homeAddress"
            value={formData.homeAddress}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterUser;
