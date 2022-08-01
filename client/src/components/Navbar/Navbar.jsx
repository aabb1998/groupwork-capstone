import React, { useEffect } from 'react';
import styles from '../../constants/theme';
import logo from '../../Assets/Homepage/logo.svg';
import { Link } from 'react-router-dom';
import { selectUser } from './../../redux/user';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = useSelector(selectUser);
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="flex flex-row justify-center text-center items-center px-5 py-10">
      <div className="flex-1 justify-center items-center">
        <img
          className="justify-center items-center m-auto"
          src={logo}
          alt="folio."
        />
      </div>
      <nav className="flex flow-row list-none justify-around flex-1 text-center items-center">
        {[
          ['Home', '/homepage'],
          ['About', '/About'],
          ['Features', '/features'],
          ['Start', '/start'],
        ].map(([title, url]) => (
          <Link
            key={title}
            to={url}
            className="font-semibold text-lightgray italic cursor-pointer hover:text-darkBlue"
          >
            {title}
          </Link>
        ))}
      </nav>
      <div className="flex-1 items-center flex-row justify-between">
        {user._id ? (
          <Link to="/login">
            <button className="bg-darkBlue px-12 py-3 rounded-lg text-white text-sm font-semibold">
              Login
            </button>
          </Link>
        ) : (
          <Link to="/dashboard">
            <button className="bg-darkBlue px-12 py-3 rounded-lg text-white text-sm font-semibold">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
