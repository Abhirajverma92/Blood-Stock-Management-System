import React, { useState, useEffect } from 'react';
import pic from '../img/HospitalIMG.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HospitalRegistration = () => {
    const [hospital, setHospital] = useState({
        hname: '',
        email: '',
        location: '',
        contactno: '',
        licenseno: '',
        cityid: '',
        login: {
            username: '',
            password: '',
            roleid: 1,
            status: 0   // Automatically set roleid to 1 for hospitals
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
            const fieldName = name.substring(name.indexOf(".") + 1);
            setHospital((prevHospital) => ({
                ...prevHospital,
                login: {
                    ...prevHospital.login,
                    [fieldName]: value
                }
            }));
        } else {
            setHospital((prevHospital) => ({
                ...prevHospital,
                [name]: value
            }));
        }
        validateField(name, value); // Validate each field on change
    };

    const validateField = (name, value) => {
        let newErrors = { ...errors };
        switch (name) {
            case 'hname':
                newErrors.hname = value ? '' : 'Hospital Name is required';
                break;
            case 'email':
                newErrors.email = value && /\S+@\S+\.\S+/.test(value) ? '' : 'Email is invalid';
                break;
            case 'location':
                newErrors.location = value ? '' : 'Location is required';
                break;
            case 'contactno':
                newErrors.contactno = value && /^\d{10}$/.test(value) ? '' : 'Contact Number must be 10 digits';
                break;
            case 'licenseno':
                newErrors.licenseno = value ? '' : 'License Number is required';
                break;
            case 'cityid':
                newErrors.cityid = value ? '' : 'City is required';
                break;
            case 'login.username':
                newErrors.username = value ? '' : 'Username is required';
                break;
            case 'login.password':
                newErrors.password = value ? '' : 'Password is required';
                break;
            default:
                break;
        }
        setErrors(newErrors);
    };

    const validate = () => {
        const newErrors = {};
        if (!hospital.hname) newErrors.hname = 'Hospital Name is required';
        if (!hospital.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(hospital.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!hospital.location) newErrors.location = 'Location is required';
        if (!hospital.contactno) {
            newErrors.contactno = 'Contact Number is required';
        } else if (!/^\d{10}$/.test(hospital.contactno)) {
            newErrors.contactno = 'Contact Number must be 10 digits';
        }
        if (!hospital.licenseno) newErrors.licenseno = 'License Number is required';
        if (!hospital.cityid) newErrors.cityid = 'City is required';
        if (!hospital.login.username) newErrors.username = 'Username is required';
        if (!hospital.login.password) newErrors.password = 'Password is required';
        return newErrors;
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
                hname: hospital.hname,
                email: hospital.email,
                licenseno: hospital.licenseno,
                location: hospital.location,
                contactno: hospital.contactno,
                cityid: hospital.cityid,
                login: {
                    username: hospital.login.username,
                    password: hospital.login.password,
                    status: 0,
                    roleid: 1
                }
            })
        };

        fetch('https://localhost:7021/api/Users/saveHopital', reqOptions)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Registration successful!");
                    navigate("/login");
                } else {
                    alert("Registration failed.");
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div
            className="hospital-registration"
            style={{
                backgroundImage: `url(${pic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Ensure background doesn't scroll
                minHeight: '100vh',
                padding: '20px',
                color: '#000',
                overflow: 'hidden' // Prevent scrolling of the background
            }}
        >
            <div
                className="d-flex justify-content-end align-items-start"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100vh', // Full height of the viewport
                    paddingTop: '20px', // Add space from top
                    paddingRight: '20px' // Add space from right
                }}
            >
                <div
                    className="container p-4 rounded shadow-lg bg-light"
                    style={{
                        maxWidth: '500px', // Adjust width as needed
                        maxHeight: '80vh', // Set maximum height
                        overflowY: 'auto', // Add vertical scrollbar if content overflows
                        margin: '0', // Remove default margin
                    }}
                >
                    <h2 className="mb-4 text-center text-dark">Hospital Registration</h2>

                    <form onSubmit={handleSubmit}>
                        <div className={`mb-3 ${errors.hname ? 'was-validated' : ''}`}>
                            <label htmlFor="hname" className="form-label">Hospital Name:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.hname ? 'is-invalid' : ''}`}
                                name="hname"
                                value={hospital.hname}
                                onChange={handleChange}
                                required
                            />
                            {errors.hname && <div className="invalid-feedback">{errors.hname}</div>}
                        </div>

                        <div className={`mb-3 ${errors.email ? 'was-validated' : ''}`}>
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                name="email"
                                value={hospital.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        <div className={`mb-3 ${errors.location ? 'was-validated' : ''}`}>
                            <label htmlFor="location" className="form-label">Location:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                                name="location"
                                value={hospital.location}
                                onChange={handleChange}
                                required
                            />
                            {errors.location && <div className="invalid-feedback">{errors.location}</div>}
                        </div>

                        <div className={`mb-3 ${errors.contactno ? 'was-validated' : ''}`}>
                            <label htmlFor="contactno" className="form-label">Contact Number:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.contactno ? 'is-invalid' : ''}`}
                                name="contactno"
                                value={hospital.contactno}
                                onChange={handleChange}
                                required
                            />
                            {errors.contactno && <div className="invalid-feedback">{errors.contactno}</div>}
                        </div>

                        <div className={`mb-3 ${errors.licenseno ? 'was-validated' : ''}`}>
                            <label htmlFor="licenseno" className="form-label">License Number:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.licenseno ? 'is-invalid' : ''}`}
                                name="licenseno"
                                value={hospital.licenseno}
                                onChange={handleChange}
                                required
                            />
                            {errors.licenseno && <div className="invalid-feedback">{errors.licenseno}</div>}
                        </div>

                        <div className={`mb-3 ${errors.cityid ? 'was-validated' : ''}`}>
                            <label htmlFor="cityid" className="form-label">City:</label>
                            <select
                                className={`form-control ${errors.cityid ? 'is-invalid' : ''}`}
                                name="cityid"
                                value={hospital.cityid}
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

                        <div className={`mb-3 ${errors.username ? 'was-validated' : ''}`}>
                            <label htmlFor="login.username" className="form-label">Username:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                name="login.username"
                                value={hospital.login.username}
                                onChange={handleChange}
                                required
                            />
                            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                        </div>

                        <div className={`mb-3 ${errors.password ? 'was-validated' : ''}`}>
                            <label htmlFor="login.password" className="form-label">Password:</label>
                            <input
                                type="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                name="login.password"
                                value={hospital.login.password}
                                onChange={handleChange}
                                required
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Register Hospital</button>
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

export default HospitalRegistration;
