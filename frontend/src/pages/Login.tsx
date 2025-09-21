import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // TODO: implement authentication logic

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', background: 'hsl(0, 0%, 100%)'
    }}>
      <h2 style={{ fontFamily: 'Space Grotesk', color: 'hsl(0, 0%, 0%)' }}>Login</h2>
      <form style={{
        display: 'flex', flexDirection: 'column', gap: '1rem', background: 'hsl(0, 0%, 96.47%)',
        padding: '2rem', borderRadius: '0rem'
      }}>
        <input
          type="text"
          placeholder="Username"
          style={{ fontFamily: 'Geist Mono', padding: '0.5rem', borderRadius: '0rem' }}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ fontFamily: 'Geist Mono', padding: '0.5rem', borderRadius: '0rem' }}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" style={{
          background: 'hsl(96, 85.19%, 73.53%)', color: 'hsl(0, 0%, 0%)',
          fontFamily: 'Space Grotesk', borderRadius: '0rem', padding: '0.75rem'
        }}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;