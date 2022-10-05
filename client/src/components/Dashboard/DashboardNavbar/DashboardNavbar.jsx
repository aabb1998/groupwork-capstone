import React, { useEffect } from 'react';
import { selectUser } from './../../../redux/user';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const DashboardNavbar = () => {
  const { user } = useSelector(selectUser);
  let navigate = useNavigate();
  useEffect(() => {
  }, [user]);

  return (
    <div className="flex flex-row justify-between py-5 px-20 text-center items-center">
      <div className="flex mr-10">
        <h3>Dashboard</h3>
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
      {/* <div className="flex-1 ml-10">
        <input
          className="border-2 text-sm border-lightgray appearance-none p-2 rounded-md outline-none"
          type="text"
          placeholder="Search Content"
        />
      </div> */}
      <div className="flex flex-row justify-between w-100">
        <img
          className="w-10 rounded-full h-10"
          src="https://media-exp1.licdn.com/dms/image/C5603AQFQY_gG-DCSuw/profile-displayphoto-shrink_100_100/0/1599099548476?e=1664409600&v=beta&t=GednSxu_vNUG-jBJTKGfshswpoaBNnzw4NsGItlke-A"
          alt="Profile url"
        />
        <div className="flex flex-col ml-3 mr-9">
          <span>{user?.firstName}</span>
          <span>Student</span>
        </div>
        <button>
          <Link to="/">Logout</Link>
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
