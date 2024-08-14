// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css'; 

// const Register = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (password !== confirmPassword) {
//             setError('Passwords do not match');
//             setSuccess('');
//             return;
//         }

//         try {
//             // Post registration data to the backend
//             const res = await axios.post('/api/users/register', { name, email, password });
//             setSuccess('Registration successful!');
//             setError('');
//         } catch (err) {
//             // Clear success message and display error
//             setSuccess('');
//             if (err.response) {
//                 // Server responded with a status other than 2xx
//                 console.error('Error response data:', err.response.data);
//                 console.error('Error response status:', err.response.status);
//                 console.error('Error response headers:', err.response.headers);
//                 setError(`Registration successful!: ${err.response.data.error || ''}`);
//             } else if (err.request) {
//                 // Request was made but no response received
//                 console.error('Error request:', err.request);
//                 setError('No response received from server.');
//             } else {
//                 // Other errors (e.g., configuration issues)
//                 console.error('Error message:', err.message);
//                 setError('Registration successful!');
//             }
//         }
//         // Clear form fields
//         setName('');
//         setEmail('');
//         setPassword('');
//         setConfirmPassword('');
//     };

//     return (
//         <div className="register-container">
//             <h1>Register</h1>
//             {success && <p className="success">{success}</p>}
//             {error && <p className="error">{error}</p>}
//             <form onSubmit={handleSubmit} className="register-form">
//                 <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         placeholder="Enter your name"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Enter your email"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Enter your password"
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="confirmPassword">Confirm Password</label>
//                     <input
//                         type="password"
//                         id="confirmPassword"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         placeholder="Confirm your password"
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="register-button">Register</button>
//             </form>
//         </div>
//     );
// };

// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; 

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setSuccess('');
            return;
        }

        try {
            // Post registration data to the backend
            const res = await axios.post('/api/users/register', { name, email, password });
            setSuccess('Registration successful!');
            setError('');
        } catch (err) {
            // Clear success message and display error
            setSuccess('');
            if (err.response) {
                // Server responded with a status other than 2xx
                setError(err.response.data.error || 'An error occurred during registration.');
            } else if (err.request) {
                // Request was made but no response received
                setError('No response received from server.');
            } else {
                // Other errors (e.g., configuration issues)
                setError('An unexpected error occurred.');
            }
        }
        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default Register;

