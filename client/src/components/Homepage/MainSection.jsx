import React from 'react';
import rightFrame from '../../Assets/Homepage/mainFrame.png';

const MainSection = () => {
  return (
    <div className="mt-28 mb-28 flex flex-row justify-center items-center">
      <div className="flex flex-col justify-between items-start">
        <h1 className="font-bold text-7xl mb-10">
          Stand Out
          <br /> from The
          <br /> Crowd.
        </h1>
        <h5 className="w-96 mb-10 text-lightgray">
          Agency is a full-service agency, busy designing and building beautiful
          digital products, brands, and experiences.{' '}
        </h5>
        <button className="px-10 py-5 bg-lightBlue font-semibold text-white rounded-lg">
          Learn More
        </button>
      </div>
      <div className="">
        <img className="w-100" src={rightFrame} alt="" />
      </div>
    </div>
  );
};

export default MainSection;
