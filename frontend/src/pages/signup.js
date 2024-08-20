import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import Img from '../Asset/Images/log in.png';
import { API_URL } from '../util'; 

const Signup = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [showLoginButton, setShowLoginButton] = useState(false);
    const navigate = useNavigate();

    const initialValues = {
        name: '',
        mob: '',
        password: ''
    };

    const handleSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            const response = await axios.post(`${API_URL}/api/auth/register`, values);
            console.log('Signup successful:', response.data);
            setSuccessMessage('Signup successful! Please log in.');
            setShowLoginButton(true);
        } catch (error) {
            console.error('Error during signup:', error);
            if (error.response && error.response.data) {
                setErrors({ submit: error.response.data.message || 'Failed to sign up. Please try again.' });
            } else {
                setErrors({ submit: 'Failed to sign up. Please try again.' });
            }
        } finally {
            setSubmitting(false);
        }
    };

    const handleLoginClick = () => {
        navigate('/login'); 
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h1>Join Linktree</h1>
                <p>Sign up for free!</p>
                {successMessage ? (
                    <div>
                        <div className="success-message">{successMessage}</div>
                        {showLoginButton && <button onClick={handleLoginClick}>Login</button>}
                    </div>
                ) : (
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors }) => (
                            <Form>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                />
                                <Field
                                    type="text"
                                    name="mob"
                                    placeholder="Mobile Number"
                                    required
                                />
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                                {errors.submit && <div className="error-message">{errors.submit}</div>}
                                <button type="submit" disabled={isSubmitting}>Create account</button>
                            </Form>
                        )}
                    </Formik>
                )}
            </div>
            <div className="image-container">
                <img src={Img} alt="Profile" />
            </div>
        </div>
    );
};

export default Signup;
