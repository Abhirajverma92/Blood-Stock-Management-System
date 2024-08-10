import React, { useState, useEffect } from 'react';
import pic from '../img/BloodbankImg.jpg'; // Your background image
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RecieverRegistration = () => {
  const [receiver, setReceiver] = useState({
    rname: '',
    email: '',
    address: '',
    contactno: '',
    aadharno: '',
    dob: '',
    gender: '',
    cityid: '',
    login: {
      username: '',
      password: '',
      roleid: 4,
      status: 0,
    },
  });

  const [cities, setCities] = useState([]);
  const [errors, setErrors] = useState({});
  const [showLogin, setShowLogin] = useState(false); // State to manage login visibility
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('https://localhost:7021/api/Users/GetCity');
        setCities(response.data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('login')) {
      let tname = name.substring(name.indexOf('.') + 1);
      setReceiver({
        ...receiver,
        login: {
          ...receiver.login,
          [tname]: value,
        },
      });
    } else {
      setReceiver({
        ...receiver,
        [name]: value,
      });
    }
  };

  const validate = () => {
    const errors = {};
    if (!receiver.rname) errors.rname = 'Receiver name is required';
    if (!receiver.email) {
      errors.email = 'Email is required';
    } else if (!/^[\w#\.-]+@[\w]+\.[a-z]{2,3}$/.test(receiver.email)) {
      errors.email = 'Email is invalid';
    }
    if (!receiver.address) errors.address = 'Address is required';
    if (!receiver.contactno) {
      errors.contactno = 'Contact Number is required';
    } else if (!/^\d{10}$/.test(receiver.contactno)) {
      errors.contactno = 'Contact Number must be 10 digits';
    }
    if (!receiver.aadharno) errors.aadharno = 'Aadhar Number is required';
    if (!receiver.dob) errors.dob = 'Date of Birth is required';
    if (!receiver.gender) errors.gender = 'Gender is required';
    if (!receiver.cityid) errors.cityid = 'City is required';
    if (!receiver.login.username) errors.username = 'Username is required';
    if (!receiver.login.password) errors.password = 'Password is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      const response = await fetch('https://localhost:7021/api/Users/saveReceiver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...receiver,
          cityid: parseInt(receiver.cityid, 10), // Convert cityid to integer
        }),
      });
      if (response.status === 200) {
        alert('Registration successful');
        navigate('/login');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  return (
    <div className="container-fluid" style={{
      backgroundImage: `url(${pic})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <div className="d-flex justify-content-end align-items-center min-vh-100">
        <div className="card p-4 shadow-lg" style={{
          width: '100%',
          maxWidth: '500px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '10px',
          maxHeight: '80vh', // Adjust height here
          overflowY: 'auto'
        }}>
          <h2 className="text-center mb-4">Receiver Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Receiver Name:</label>
              <input
                type="text"
                name="rname"
                className="form-control"
                value={receiver.rname}
                onChange={handleChange}
                required
              />
              {errors.rname && <p className="text-danger">{errors.rname}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={receiver.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Date of Birth:</label>
              <input
                type="date"
                name="dob"
                className="form-control"
                value={receiver.dob}
                onChange={handleChange}
                required
              />
              {errors.dob && <p className="text-danger">{errors.dob}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Address:</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={receiver.address}
                onChange={handleChange}
                required
              />
              {errors.address && <p className="text-danger">{errors.address}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Contact Number:</label>
              <input
                type="text"
                name="contactno"
                className="form-control"
                value={receiver.contactno}
                onChange={handleChange}
                required
              />
              {errors.contactno && <p className="text-danger">{errors.contactno}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Aadhar Number:</label>
              <input
                type="text"
                name="aadharno"
                className="form-control"
                value={receiver.aadharno}
                onChange={handleChange}
                required
              />
              {errors.aadharno && <p className="text-danger">{errors.aadharno}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Gender:</label>
              <input
                type="text"
                name="gender"
                className="form-control"
                value={receiver.gender}
                onChange={handleChange}
                required
              />
              {errors.gender && <p className="text-danger">{errors.gender}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">City:</label>
              <select
                name="cityid"
                className="form-select"
                value={receiver.cityid}
                onChange={handleChange}
                required
              >
                <option value="">--Select City--</option>
                {cities.map((city) => (
                  <option key={city.cityid} value={city.cityid}>
                    {city.cname}
                  </option>
                ))}
              </select>
              {errors.cityid && <p className="text-danger">{errors.cityid}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Username:</label>
              <input
                type="text"
                name="login.username"
                className="form-control"
                value={receiver.login.username}
                onChange={handleChange}
                required
              />
              {errors.username && <p className="text-danger">{errors.username}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                name="login.password"
                className="form-control"
                value={receiver.login.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>

            <button type="submit" className="btn btn-primary w-100">Register Receiver</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecieverRegistration;
