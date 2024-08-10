import React, { useState, useEffect } from 'react';
import pic from '../img/DonorIMG3.webp'; // Ensure this image path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DonorRegistration = () => {
  const [donor, setDonor] = useState({
    dname: '',
    email: '',
    address: '',
    contactno: '',
    dob: '',
    gender: '',
    adharno: '',
    cityid: '',
    bloodproduct: '',
    login: {
      username: '',
      password: '',
      roleid: 3,
      status: 0
    }
  });

  const [cities, setCities] = useState([]);
  const [bloodProducts, setBloodProducts] = useState([]);
  const [errors, setErrors] = useState({});
  const [showLogin, setShowLogin] = useState(false);
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

    const fetchBloodProducts = async () => {
      try {
        const response = await axios.get('https://localhost:7021/api/Users/GetBloodproducts');
        setBloodProducts(response.data);
      } catch (error) {
        console.error('Error fetching blood products:', error);
      }
    };

    fetchCities();
    fetchBloodProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('login')) {
      const tname = name.substring(name.indexOf('.') + 1);
      setDonor(prevDonor => ({
        ...prevDonor,
        login: {
          ...prevDonor.login,
          [tname]: value
        }
      }));
    } else {
      setDonor(prevDonor => ({
        ...prevDonor,
        [name]: value
      }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!donor.dname) errors.dname = 'Donor name is required';
    if (!donor.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(donor.email)) {
      errors.email = 'Email is invalid';
    }
    if (!donor.address) errors.address = 'Address is required';
    if (!donor.contactno) {
      errors.contactno = 'Contact Number is required';
    } else if (!/^\d{10}$/.test(donor.contactno)) {
      errors.contactno = 'Contact Number must be 10 digits';
    }
    if (!donor.dob) errors.dob = 'Date of Birth is required';
    if (!donor.cityid) errors.cityid = 'City is required';
    if (!donor.login.username) errors.username = 'Username is required';
    if (!donor.login.password) errors.password = 'Password is required';
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
      const response = await fetch('https://localhost:7021/api/Users/saveDonor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          dname: donor.dname,
          email: donor.email,
          dob: donor.dob,
          gender: donor.gender,
          adharno: donor.adharno,
          bloodproduct: donor.bloodproduct,
          address: donor.address,
          contactno: donor.contactno,
          cityid: donor.cityid,
          login:{
            username: donor.login.username,
            password:donor.login.password,
            status:0,
            roleid:3
          }
         
        })
      });

      if (response.ok) {
        alert('Registration successful');
        navigate('/login');
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        alert('Registration failed: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('An error occurred:', error);
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
          maxWidth: '400px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '10px',
          maxHeight: '70vh', // Adjust height here
          overflow: 'auto',
          margin: '1rem'
        }}>
          <h2 className="text-center mb-4">Donor Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Donor Name:</label>
              <input
                type="text"
                name="dname"
                className="form-control"
                value={donor.dname}
                onChange={handleChange}
                required
              />
              {errors.dname && <p className="text-danger">{errors.dname}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={donor.email}
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
                value={donor.dob}
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
                value={donor.address}
                onChange={handleChange}
                required
              />
              {errors.address && <p className="text-danger">{errors.address}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Blood Product:</label>
              <select
                name="bloodproduct"
                className="form-select"
                value={donor.bloodproduct}
                onChange={handleChange}
                required
              >
                <option value="">--Select Blood Product--</option>
                {bloodProducts.map((product) => (
                  <option key={product.bloodproductid} value={product.bloodproductid}>
                    {product.bloodproductname}
                  </option>
                ))}
              </select>
              {errors.bloodproduct && <p className="text-danger">{errors.bloodproduct}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Contact Number:</label>
              <input
                type="text"
                name="contactno"
                className="form-control"
                value={donor.contactno}
                onChange={handleChange}
                required
              />
              {errors.contactno && <p className="text-danger">{errors.contactno}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">Aadhar Number:</label>
              <input
                type="text"
                name="adharno"
                className="form-control"
                value={donor.adharno}
                onChange={handleChange}
                required
              />
              {errors.adharno && <p className="text-danger">{errors.adharno}</p>}
            </div>

            <div className="mb-3">
              <label className="form-label">City:</label>
              <select
                name="cityid"
                className="form-select"
                value={donor.cityid}
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
                value={donor.login.username}
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
                value={donor.login.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>

            <button type="submit" className="btn btn-primary">Register Donor</button>
          </form>

          {showLogin && (
            <div className="mt-4">
              <h2>Login</h2>
              {/* Your login component goes here */}
              <p>Login form will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonorRegistration;
