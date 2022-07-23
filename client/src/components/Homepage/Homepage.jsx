import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { selectUser } from '../../redux/user';
import { useSelector } from 'react-redux';

const Homepage = ({ store }) => {
  // console.log(store.getState());
  const user = useSelector(selectUser);

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <div>
      <div className="button">
        <Link to="SignUp">
          <button>Sign Up</button>
        </Link>
        <Link to="Login">
          <button>Login</button>
        </Link>
        <Link to="Dashboard">
          <button>Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
