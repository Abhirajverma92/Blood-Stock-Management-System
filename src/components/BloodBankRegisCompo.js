import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const HospitalRegistration = () => {
    const [formData, setFormData] = useState({
        BID: '',
        Bname: '',
        Email: '',
        ContactDetails: '',
        Location: '',
        LicenseNumber: '',
        Password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="blood-registration">
            <div className="background-image"></div>

            <div className="form-container container  p-4 rounded shadow-lg">
                <h2 className="mb-4">Blood Bank Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Bname" className="form-label">Bank Name:</label>
                        <input
                            type="text"
                            id="Bname"
                            name="Bname"
                            className="form-control"
                            value={formData.Bname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password:</label>
                        <input
                            type="text"
                            id="Password"
                            name="Password"
                            className="form-control"
                            value={formData.Password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email:</label>
                        <input
                            type="email"
                            id="Email"
                            name="Email"
                            className="form-control"
                            value={formData.Email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ContactDetails" className="form-label">Contact Number:</label>
                        <input
                            type="text"
                            id="ContactDetails"
                            name="ContactDetails"
                            className="form-control"
                            value={formData.ContactDetails}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Location" className="form-label">Address:</label>
                        <input
                            type="text"
                            id="Location"
                            name="Location"
                            className="form-control"
                            value={formData.Location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LicenseNumber" className="form-label">License Number:</label>
                        <input
                            type="text"
                            id="LicenseNumber"
                            name="LicenseNumber"
                            className="form-control"
                            value={formData.LicenseNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
};

export default HospitalRegistration;
