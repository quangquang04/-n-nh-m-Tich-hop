import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import HRLogo from '../assets/HRLogo.jpg';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';

function Login() {
    return (
        <div
            className="vh-100 d-flex align-items-center justify-content-center bg-light p-3"
            style={{ minHeight: '100vh' }}
        >
            <MDBContainer
                fluid
                className="p-0"
                style={{ maxWidth: '900px' }}
            >
                <MDBRow className="g-0 shadow-lg rounded overflow-hidden" style={{ backgroundColor: 'white' }}>
                    <MDBCol md='6' className="p-5">
                        <div className="d-flex flex-column">
                            <div className="text-center mb-5">
                                <img
                                    src={HRLogo}
                                    style={{ width: '140px', height: 'auto' }}
                                    alt="HR Management System Logo"
                                    className="mb-3"
                                />
                                <h4 className="fw-bold">HR Management System</h4>
                            </div>

                            <p className="text-center mb-4 text-muted">Please login to your account</p>

                            <MDBInput
                                wrapperClass='mb-4'
                                label='Username'
                                id='form1'
                                type='text'
                            />
                            <MDBInput
                                wrapperClass='mb-4'
                                label='Password'
                                id='form2'
                                type='password'
                            />

                            <div className="text-center pt-1 mb-5">
                                <MDBBtn
                                    className="mb-4 w-100 gradient-custom-2"
                                    size="lg"
                                >
                                    Sign in
                                </MDBBtn>
                                <a className="text-muted small" href="#!">Forgot password?</a>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center">
                                <p className="mb-0 me-2">Don't have an account?</p>
                                <MDBBtn
                                    outline
                                    color='danger'
                                    size="sm"
                                >
                                    Ask your admin to create one
                                </MDBBtn>
                            </div>
                        </div>
                    </MDBCol>

                    {/* Right side - Info panel */}
                    <MDBCol
                        md='6'
                        className="gradient-custom-2 text-white d-flex align-items-center"
                    >
                        <div className="p-5 mx-md-4">
                            <h4 className="mb-4">Save your precious time</h4>
                            <p className="small mb-0">
                                Designed to centralize and automate a company’s human resources tasks. 
                                It acts as a "single source of truth" for all employee-related data, 
                                moving away from messy spreadsheets and manual paperwork.
                            </p>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Login;