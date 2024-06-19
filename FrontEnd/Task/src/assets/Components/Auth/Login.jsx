import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from './AuthService';
import styles from './Login.module.css'; 

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    setLoading(true);
    AuthService.login(username, password)
      .then(() => {
        history.push('/tasks');
        window.location.reload();
      })
      .catch(() => {
        setError('Login failed. Please check your credentials.');
        setLoading(false);
      });
  };

  return (
    <div className={styles.login}>
      <h2>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin} disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
