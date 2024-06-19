// Navbar.jsx

import { Link } from 'react-router-dom';
import './Navbar.css';



// eslint-disable-next-line react/prop-types
const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Task Manager</Link>
      </div>
      <div className="navbar-links">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="navbar-link">Logout</button>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/register" className="navbar-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
