import React, { useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Form from './LoginCompo';import BloodBankRegis from './BloodBankRegisCompo';
import HospitalRegis from './HospitalRegisCompo';
import DonorRegis from './DonorRegisCompo';
import ReceiverRegis from './ReceiverRegisCompo';
import Home from './HomeComponet';

export default function NavigationBar() {
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        const value = event.target.value;
        if (value === 'Blood Bank') {
            navigate('/blood');
        } else if (value === 'Hospital') {
            navigate('/hospital');
        }
        else if (value === 'Donor') {
            navigate('/donor');
        }
        else if (value === 'Receiver') {
            navigate('/receiver');
        }
       
    };

    // useEffect(()=> {fetch("http://localhost:7066/api/Login")
    //     .then(resp => resp.json())
    //     .then(login => login(login))
    //   },[]);

    return (
        <div>
            <ul className="nav navbar" style={{ backgroundColor: 'black' }}>
                <li className="nav-item"></li>
                <Link to="/form" className="nav-link">Login</Link>
                <li className="nav-item"></li>
                <Link to="/home" className="nav-link">Home</Link>
                <li className="nav-item"></li>

                <select id="dropdown" style={{ color: 'blue', background: 'black' }} onChange={handleSelectChange}>
                    <option value="">Registration</option>
                    <option value="Blood Bank">Blood Bank</option>
                    <option value="Hospital">Hospital</option>
                    <option value="Donor">Donor</option>
                    <option value="Receiver">Receiver</option>
                </select>

                <li className="nav-item"></li>
                <Link to="/contact" className="nav-link">About Us</Link>
            </ul>
            <Routes>
                <Route path="/form" element={<Form />} />
                <Route path="/blood" element={<BloodBankRegis />} />
                <Route path="/hospital" element={<HospitalRegis />} />
                <Route path="/donor" element={<DonorRegis />} />
                <Route path="/receiver" element={<ReceiverRegis />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            
        </div>
    );
}
