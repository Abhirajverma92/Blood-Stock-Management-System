// function ReceiverRegis(){
//     return(
//         <div>
//             THIS IS Receiver Registration PAGE.
//         </div>
//     )
// }
// export default ReceiverRegis;

import React, { useState } from 'react';
import pic from '../img/DonorIMG2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReceiverRegistration = () => {
  const [formData, setFormData] = useState({
    receiverName: '',
    contactNumber: '',
    location: '',
    bloodType: '',
    gender: '',
    payment: '',
    adharNumber: '',
    age: '',
    dob: '',
    email: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div
      className="receiver-registration"
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
        color: '#000',
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
          zIndex: 1,
        }}
      ></div>

      <div
        className="form-container container p-4 rounded shadow-lg"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          width: '100%',
          maxWidth: '600px',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <h2
          className="mb-4 mt-5 text-center"
          style={{
            zIndex: 2,
            color: '#000',
          }}
        >
          Receiver Registration
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="receiverName" className="form-label">
              Receiver Name:
            </label>
            <input
              type="text"
              id="receiverName"
              name="receiverName"
              className="form-control"
              value={formData.receiverName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">
              Contact Number:
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              className="form-control"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="form-control"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="bloodType" className="form-label">
              Blood Type:
            </label>
            <input
              type="text"
              id="bloodType"
              name="bloodType"
              className="form-control"
              value={formData.bloodType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              className="form-select"
              value={formData.gender}
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
            <label htmlFor="payment" className="form-label">
              Payment:
            </label>
            <input
              type="text"
              id="payment"
              name="payment"
              className="form-control"
              value={formData.payment}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="adharNumber" className="form-label">
              Aadhar Number:
            </label>
            <input
              type="text"
              id="adharNumber"
              name="adharNumber"
              className="form-control"
              value={formData.adharNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
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
            <label htmlFor="city" className="form-label">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-control"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReceiverRegistration;
