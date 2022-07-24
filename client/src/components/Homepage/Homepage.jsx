import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { selectUser } from '../../redux/user';
import { useSelector } from 'react-redux';

const Homepage = ({ store }) => {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div>
      <div className="button">
        <Link to="/signUp">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/dashboard">
          <button>Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
