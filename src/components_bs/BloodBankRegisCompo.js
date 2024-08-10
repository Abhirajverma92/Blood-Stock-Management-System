import React, { useState, useEffect } from 'react';
import pic from '../img/bloodbaank.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BloodbankRegistration = () => {
    const [bloodbank, setBloodBank] = useState({
        bname: '',
        email: '',
        location: '',
        contactno: '',
        licenseno: '',
        foundationdate: '',
        cityid: '',
        login: {
            username: '',
            password: '',
            roleid: 2,
            status: 0 // Automatically set roleid to 2 for blood banks
        }
    });

    const [cities, setCities] = useState([]);
    const [errors, setErrors] = useState({});
    const [showLogin, setShowLogin] = useState(false); // State to manage login visibility
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get('https://localhost:7021/api/Users/GetCity'); // Replace with your API endpoint
                setCities(response.data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCities();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith("login")) {
            const tname = name.substring(name.indexOf(".") + 1);
            setBloodBank({
                ...bloodbank,
                login: {
                    ...bloodbank.login, [tname]: value
                }
            });
        } else {
            setBloodBank({
                ...bloodbank,
                [name]: value
            });
        }
    };

    const validate = () => {
        const errors = {};

        // Blood Bank Name
        if (!bloodbank.bname) errors.bname = 'Blood Bank name is required';

        // Email
        if (!bloodbank.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(bloodbank.email)) {
            errors.email = 'Email is invalid';
        }

        // Location
        if (!bloodbank.location) errors.location = 'Location is required';

        // Contact Number
        if (!bloodbank.contactno) {
            errors.contactno = 'Contact Number is required';
        } else if (!/^\d{10}$/.test(bloodbank.contactno)) {
            errors.contactno = 'Contact Number must be 10 digits';
        }

        // License Number
        if (!bloodbank.licenseno) {
            errors.licenseno = 'License Number is required';
        }

        // Foundation Date
        if (!bloodbank.foundationdate) {
            errors.foundationdate = 'Foundation Date is required';
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(bloodbank.foundationdate)) {
            errors.foundationdate = 'Foundation Date must be in YYYY-MM-DD format';
        }

        // City
        if (!bloodbank.cityid) errors.cityid = 'City is required';

        // Username
        if (!bloodbank.login.username) errors.username = 'Username is required';

        // Password
        if (!bloodbank.login.password) {
            errors.password = 'Password is required';
        } else if (bloodbank.login.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const reqOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bname: bloodbank.bname,
                email: bloodbank.email,
                licenseno: bloodbank.licenseno,
                location: bloodbank.location,
                contactno: bloodbank.contactno,
                foundationdate: bloodbank.foundationdate,
                cityid: bloodbank.cityid,
                login: {
                    username: bloodbank.login.username,
                    password: bloodbank.login.password,
                    status: 0,
                    roleid: 2
                }
            })
        };

        fetch('https://localhost:7021/api/Users/saveBloodBank', reqOptions)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Registration successful!");
                    navigate("/login");
                } else {
                    alert("Registration failed.");
                }
            })
            .catch(function (error) {
                alert(error.message);
            });
    };

    return (
        <div
            className="bloodbank-registration"
            style={{
                backgroundImage: `url(${pic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                padding: '20px',
                color: '#000',
                overflow: 'hidden'
            }}
        >
            <div
                className="d-flex justify-content-end align-items-start"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100vh',
                    paddingTop: '20px',
                    paddingRight: '20px'
                }}
            >
                <div
                    className="container p-4 rounded shadow-lg bg-light"
                    style={{
                        maxWidth: '500px',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                        margin: '0'
                    }}
                >
                    <h2 className="mb-4 text-center text-dark">Blood Bank Registration</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="bname" className="form-label">Blood Bank Name:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.bname ? 'is-invalid' : ''}`}
                                name="bname"
                                value={bloodbank.bname}
                                onChange={handleChange}
                                required
                            />
                            {errors.bname && <div className="invalid-feedback">{errors.bname}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                name="email"
                                value={bloodbank.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                                name="location"
                                value={bloodbank.location}
                                onChange={handleChange}
                                required
                            />
                            {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="contactno" className="form-label">Contact Number:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.contactno ? 'is-invalid' : ''}`}
                                name="contactno"
                                value={bloodbank.contactno}
                                onChange={handleChange}
                                required
                            />
                            {errors.contactno && <div className="invalid-feedback">{errors.contactno}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="licenseno" className="form-label">License Number:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.licenseno ? 'is-invalid' : ''}`}
                                name="licenseno"
                                value={bloodbank.licenseno}
                                onChange={handleChange}
                                required
                            />
                            {errors.licenseno && <div className="invalid-feedback">{errors.licenseno}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="foundationdate" className="form-label">Foundation Date:</label>
                            <input
                                type="date"
                                className={`form-control ${errors.foundationdate ? 'is-invalid' : ''}`}
                                name="foundationdate"
                                value={bloodbank.foundationdate}
                                onChange={handleChange}
                                required
                            />
                            {errors.foundationdate && <div className="invalid-feedback">{errors.foundationdate}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cityid" className="form-label">City:</label>
                            <select
                                className={`form-control ${errors.cityid ? 'is-invalid' : ''}`}
                                name="cityid"
                                value={bloodbank.cityid}
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
                            {errors.cityid && <div className="invalid-feedback">{errors.cityid}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="login.username" className="form-label">Username:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                name="login.username"
                                value={bloodbank.login.username}
                                onChange={handleChange}
                                required
                            />
                            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="login.password" className="form-label">Password:</label>
                            <input
                                type="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                name="login.password"
                                value={bloodbank.login.password}
                                onChange={handleChange}
                                required
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Register Blood Bank</button>
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

export default BloodbankRegistration;
