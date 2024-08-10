import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../img/BloodbankImg.jpg'; 

const Home = () => {
    return (
        <div>
            
            <div 
                className="hero-section text-white text-center"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '80vh',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff'
                }}
            >
                <div 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                        zIndex: 1
                    }}
                ></div>
                <div style={{ zIndex: 2 }}>
                    <h1>Welcome to the Blood Bank Management System</h1>
                    <p>Saving lives one donation at a time</p>
                    <button className="btn btn-primary mt-3">Learn More</button>
                </div>
            </div>

       
            <div className="container my-5">
                <h2 className="text-center mb-4">Our Features</h2>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div className="feature-box p-4 shadow-sm rounded">
                            <i className="fas fa-tint fa-3x mb-3 text-primary"></i>
                            <h4>Efficient Blood Donation</h4>
                            <p>Streamline your blood donation process with our efficient system.</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="feature-box p-4 shadow-sm rounded">
                            <i className="fas fa-hands-helping fa-3x mb-3 text-primary"></i>
                            <h4>Volunteer Management</h4>
                            <p>Manage volunteers easily and organize donation drives effectively.</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div className="feature-box p-4 shadow-sm rounded">
                            <i className="fas fa-chart-line fa-3x mb-3 text-primary"></i>
                            <h4>Comprehensive Analytics</h4>
                            <p>Gain insights with detailed analytics on donations and inventory.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-6" style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <table className="table table-responsive">
                    <tbody>
                        <tr>
                            <th colspan="3" style={{ color: 'white', backgroundColor: 'red' }}>
                                Compatible Blood Type Donors
                            </th>
                        </tr>
                        <tr>
                            <td><b>Blood Type</b></td>
                            <td><b>Donate Blood To</b></td>
                            <td><b>Receive Blood From</b></td>
                        </tr>
                        <tr>
                            <td><span style={{ color: '#961e1b' }}><b>A+</b></span></td>
                            <td>A+ AB+</td>
                            <td>A+ A- O+ O-</td>
                        </tr>
                        <tr>
                            <td><span style={{ color: '#961e1b' }}><b>O+</b></span></td>
                            <td>O+ A+ B+ AB+</td>
                            <td>O+ O-</td>
                        </tr>
                        <tr>
                            <td><span style={{ color: '#961e1b' }}><b>B+</b></span></td>
                            <td>B+ AB+</td>
                            <td>B+ B- O+ O-</td>
                        </tr>
                        <tr>
                            <td><span style={{ color: '#961e1b' }}><b>AB+</b></span></td>
                            <td>AB+</td>
                            <td>Everyone</td>
                        </tr>
                        <tr>
                            <td><span style={{ color: '#961e1b' }}><b>A-</b></span></td>
                            <td>A+ A- AB+ AB-</td>
                            <td>A- O-</td>
                        </tr>
                        <tr>
                            <td><span style={{ color: '#961e1b' }}><b>O-</b></span></td>
                            <td>Everyone</td>
                            <td>O-</td>
                        </tr>
                        <tr>
                            <td><span style={{ color: '#961e1b' }}><b>B-</b></span></td>
                            <td>B+ B- AB+ AB-</td>
                            <td>B- O-</td>
                        </tr>
                        <tr>
                            <td><span style={{ color: '#961e1b' }}><b>AB-</b></span></td>
                            <td>AB+ AB-</td>
                            <td>AB- A- B- O-</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
            <footer className="bg-dark text-white text-center py-4">
                <p>&copy; 2024 Blood Bank Management System. All rights reserved.</p>
                <p>Follow us on 
                    <a href="#" className="text-white mx-2"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
                </p>
                
            </footer>


                    
            
        </div>
    );
};

export default Home;
