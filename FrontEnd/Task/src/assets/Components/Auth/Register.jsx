import  { useState } from 'react';
import AuthService from './AuthService';
import styles from './Register.module.css'; // Import CSS module

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = () => {
    setLoading(true);
    AuthService.register(username, email, password)
      .then(() => {
        console.log('Registration successful');
        // Optionally, redirect to login page after registration
      })
      .catch(() => {
        setError('Registration failed. Please try again.');
        setLoading(false);
      });
  };

  return (
    <div className={styles.register}>
      <h2>Register</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleRegister} disabled={loading}>
          {loading ? 'Loading...' : 'Register'}
        </button>
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  );
};

export default Register;
