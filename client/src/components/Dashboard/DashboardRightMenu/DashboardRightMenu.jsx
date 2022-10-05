import React from 'react';
import RatingBoard from './RatingBoard';

const DashboardRightMenu = () => {
  const ratingBoard = {
    padding: '10px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '150px',
    borderRadius: '10px',
  };

  return (
    <div className=" w-100 min-h-screen min-w-max pr-5 mt-10">
      <div className="font-bold text-lg">User Summary</div>
      <RatingBoard rating="Communication" color="#BFEBFF" />
      <RatingBoard rating="Collaboration" color="#F3E8FF" />
      <RatingBoard rating="Functionality" color="#DCFCE7" />
    </div>
  );
};

export default DashboardRightMenu;
