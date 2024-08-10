import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your specific registration components
import HospitalRegistration from './HospitalRegisCompo';
import ReceiverRegistration from './ReceiverRegisCompo';
import DonorRegistration from './DonorRegisCompo';
import BloodbankRegistration from './BloodBankRegisCompo';

const Register = () => {
    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    const renderRegistrationForm = () => {
        switch (selectedRole) {
            case 'hospital':
                return <HospitalRegistration />;
            case 'bloodbank':
                return <BloodbankRegistration/>;
            case 'receiver':
                return <ReceiverRegistration />;
            case 'donor':
                return <DonorRegistration />;
            default:
                return <p>Please select a role to register.</p>;
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Register</h2>
            <div className="text-center mb-4">
                <select 
                    className="form-select mb-3"
                    value={selectedRole}
                    onChange={handleRoleChange}
                >
                    <option value="">Select Role</option>
                    <option value="hospital">Hospital</option>
                    <option value="bloodbank">Blood Bank</option>
                    <option value="receiver">Receiver</option>
                    <option value="donor">Donor</option>
                </select>
            </div>
            {renderRegistrationForm()}
        </div>
    );
};

export default Register;
