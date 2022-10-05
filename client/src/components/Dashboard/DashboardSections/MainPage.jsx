import React from 'react';
import UserDailyEvents from './UserDailyEvents/UserDailyEvents';
import UserRatings from './UserRatings/UserRatings';

const MainPage = () => {
  return (
    <div className="mainpage-container">
      <h1 className="font-semibold text-3xl">Good morning, Abdul!</h1>
      <div className="daily-events">
        <UserDailyEvents />
      </div>
      <div className="user-ratings">
        <UserRatings />
      </div>
    </div>
  );
};

export default MainPage;
