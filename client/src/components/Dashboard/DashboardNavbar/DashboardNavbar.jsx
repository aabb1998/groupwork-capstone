import React, { useEffect } from 'react';
import { selectUser } from './../../../redux/user';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../Assets/Homepage/logo.svg';
import { BiLogOutCircle } from 'react-icons/bi';

const DashboardNavbar = () => {
  const { user } = useSelector(selectUser);
  let navigate = useNavigate();
  useEffect(() => {}, [user]);

  return (
    <div className="flex flex-row justify-between py-5 px-20 text-center items-center">
      <div
        className=""
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 0.6,
        }}
      >
        <div className="flex mr-10">
          <img
            className="justify-center items-center m-auto"
            src={logo}
            alt="folio."
          />
        </div>
        <div className="flex-1 flex-row w-52">
          {[
            ['Home', '/homepage'],
            ['Settings', '/About'],
            ['Team', '/features'],
          ].map(([title, url]) => (
            <Link
              key={title}
              to={url}
              className="font-semiboldcursor-pointer hover:text-darkBlue mr-16 text-lightgray font-semibold"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-between w-100">
        <div className="flex flex-row justify-start hover:cursor-pointer">
          <img
            className="w-10 rounded-full h-10 border-lightBlue"
            style={{
              border: '1px solid',
            }}
            src={user.profileUrl}
            alt="Profile url"
          />
          <div className="flex flex-col ml-3 mr-9 justify-start text-left">
            <span className="font-bold">{user?.firstName}</span>
            <span className="text-sm font-bold text-lightgray">Student</span>
          </div>
        </div>

        <button>
          <Link to="/">
            <BiLogOutCircle />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
