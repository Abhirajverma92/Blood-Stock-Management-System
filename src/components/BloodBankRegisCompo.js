import React, { useState } from 'react';
import pic from '../img/BloodbankImg.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const BloodBankRegistration = () => {
    const [formData, setFormData] = useState({
        bankName: '',
        password: '',
        email: '',
        contactNumber: '',
        address: '',
        licenseNumber: ''
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
        <div 
            className="blood-bank-registration"
            style={{ 
                backgroundImage: `url(${pic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                position: 'relative',
                color: '#000'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                    zIndex: 1
                }}
            ></div>
            
            <div 
                className="form-container container  p-4 rounded shadow-lg"
                style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    width: '100%',
                    maxWidth: '600px',
                    zIndex: 2,
                    position: 'relative'
                }}>

                <h2 
                    className="mb-4 mt-5 text-center"
                    style={{
                        zIndex: 2,
                        color: '#000'
                    }}
                >
                    Blood Bank Registration
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="bankName" className="form-label">Bank Name:</label>
                        <input
                            type="text"
                            id="bankName"
                            name="bankName"
                            className="form-control"
                            value={formData.bankName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
                        <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            className="form-control"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="form-control"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="licenseNumber" className="form-label">License Number:</label>
                        <input
                            type="text"
                            id="licenseNumber"
                            name="licenseNumber"
                            className="form-control"
                            value={formData.licenseNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
            </div>
        </div>
    );
};

export default BloodBankRegistration;
