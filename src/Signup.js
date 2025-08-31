import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

function Signup() {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSignup = (e) => {
e.preventDefault();
let users = JSON.parse(localStorage.getItem('users') || '[]');
// Check if email already exists
if (users.some(u => u.email === email)) {
alert('Account with this email already exists.');
return;
}
// Add new user
users.push({ email, password });
localStorage.setItem('users', JSON.stringify(users));
alert('Signup successful! Please log in.');
navigate('/'); // go to login page
};

return (
<div className="container">
<h2>Sign Up for To-Tick</h2>
<form onSubmit={handleSignup}>
<div>
<FaEnvelope />
<input
type="email"
placeholder="Email"
value={email}
onChange={e => setEmail(e.target.value)}
required
/>
</div>
<div>
<FaLock />
<input
type="password"
placeholder="Password"
value={password}
onChange={e => setPassword(e.target.value)}
required
/>
</div>
<button type="submit">Sign Up</button>
</form>
<p>Already have an account? <Link to="/">Log in</Link></p>
</div>
);
}

export default Signup;
