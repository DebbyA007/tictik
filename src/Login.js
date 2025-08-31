import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// Handle login (very basic check against localStorage users)
const handleLogin = (e) => {
e.preventDefault();
const users = JSON.parse(localStorage.getItem('users') || '[]');
const user = users.find(u => u.email === email && u.password === password);
if (user) {
navigate('/tasks'); // go to tasks on success
} else {
alert('Invalid credentials or no account found.');
}
};

return (
<div className="container">
<h2>Login to To-Tick</h2>
<form onSubmit={handleLogin}>
<div>
<FaUser />
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
<button type="submit">Login</button>
</form>
<p>New here? <Link to="/signup">Sign up</Link></p>
</div>
);
}

export default Login;