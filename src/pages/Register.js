import React, { useState } from 'react';
import { register } from '../api';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(email, password);
    setMsg(result.message);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Gmail" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      {msg && <div className="popup">{msg}</div>}
    </div>
  );
}

export default Register;