import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [user, setUser] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth', data);
      console.log('Login successful');
      console.log(response);
      setUser(response.data.user);
    } catch (error) {
      // console.log(error);
      // setError(error.response.data.message);
    }
  };
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="login">
      <div className="login-container">
        <form id="login-form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
          />
          {error && (
            <div className="login-error">
              <MdError
                style={{
                  alignItems: 'center',
                  textAlign: 'center',
                  marginRight: '4px',
                }}
                color="red"
              />
              <span>{error}</span>
            </div>
          )}

          <button type="submit">Login</button>
          <Link className="signup-link" to="/signup">
            <span>Don't have an account? Sign up.</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
