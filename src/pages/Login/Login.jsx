import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../service/AuthService';
import './Login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setIsAnimating(true);

        try {
            await AuthService.login(credentials);
            navigate('/dashboard');
        } catch (err) {
            setError(err.message || 'Login failed. Please try again.');
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 500);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className={`login-container ${isAnimating ? 'shake' : ''} p-2`}>
                <div className="login-header">
                    <h2>Welcome Back</h2>
                    <p>Please enter your credentials to login</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    {error && (
                        <div className="error-message">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                            </svg>
                            {error}
                        </div>
                    )}

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            className="login-input"
                        />
                        <label>Email Address</label>
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder=" "
                            required
                            className="login-input"
                        />
                        <label>Password</label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`login-button ${loading ? 'loading' : ''}`}>
                        {loading ? (
                            <>
                                <span className="spinner"></span>
                                Authenticating...
                            </>
                        ) : (
                            'Login'
                        )}
                    </button>

                    <div className="login-footer">
                        <p className="signup-link">
                            Don't have an account?{' '}
                            <span onClick={() => navigate('/signup')}>Create one</span>
                        </p>
                        <p className="forgot-password" onClick={() => navigate('/forgot-password')}>
                            Forgot password?
                        </p>
                    </div>
                </form>
            </div>

            {/* Moved inside the page */}
            <div className="login-decoration">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
            </div>
        </div>
    );
};

export default Login;
