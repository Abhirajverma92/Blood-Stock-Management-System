// function DonorRegis(){
//     return(
//         <div>
//             THIS IS Donor Registration PAGE.
//         </div>
//     )
// }
// export default DonorRegis;

import React, { useState } from 'react';
import pic from '../img/DonorIMG3.webp';
import 'bootstrap/dist/css/bootstrap.min.css';

const HospitalRegistration = () => {
    const [formData, setFormData] = useState({
        Dname: '',
        ContactDetails: '',
        Gender: '',
        AdharNO: '',
        DOB: '',
        BloodType: '',
        LastDonationDate: '',
        Age: '',
        City: ''
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
            className="Donor-registration"
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
                    Donor Registration
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Dname" className="form-label">Donor Name:</label>
                        <input
                            type="text"
                            id="Dname"
                            name="Dname"
                            className="form-control"
                            value={formData.Dname}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ContactDetails" className="form-label">Contact Details:</label>
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
                        <label htmlFor="Gender" className="form-label">Gender:</label>
                        <select
                            id="Gender"
                            name="Gender"
                            className="form-select"
                            value={formData.Gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="AdharNO" className="form-label">Aadhar Number:</label>
                        <input
                            type="text"
                            id="AdharNO"
                            name="AdharNO"
                            className="form-control"
                            value={formData.AdharNO}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="DOB" className="form-label">Date of Birth:</label>
                        <input
                            type="date"
                            id="DOB"
                            name="DOB"
                            className="form-control"
                            value={formData.DOB}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="BloodType" className="form-label">Blood Product:</label>
                        <input
                            type="text"
                            id="BloodType"
                            name="BloodType"
                            className="form-control"
                            value={formData.BloodType}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LastDonationDate" className="form-label">Last Donation Date:</label>
                        <input
                            type="date"
                            id="LastDonationDate"
                            name="LastDonationDate"
                            className="form-control"
                            value={formData.LastDonationDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Age" className="form-label">Age:</label>
                        <input
                            type="number"
                            id="Age"
                            name="Age"
                            className="form-control"
                            value={formData.Age}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="City" className="form-label">City:</label>
                        <input
                            type="text"
                            id="City"
                            name="City"
                            className="form-control"
                            value={formData.City}
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

export default HospitalRegistration;
