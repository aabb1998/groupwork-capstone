import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <div className="button">
        <Link to="SignUp">
          <button>Sign Up</button>
        </Link>
        <Link to="Login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
