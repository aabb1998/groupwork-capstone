import React, { useEffect } from 'react';

const featureRating = ({ ratingData }) => {
  useEffect(() => {
    console.log(ratingData);
  }, [ratingData]);
  return (
    <div
      style={{
        background: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
        borderRadius: '11px',
        padding: '10px',
        margin: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        className="header"
      >
        <div className="">
          <h1>{ratingData.title}</h1>
          <span>Feature Description: {ratingData.description}</span>
        </div>

        <span>{ratingData.ratings.length}</span>
      </div>
      <div className="rating-details"></div>
    </div>
  );
};

export default featureRating;
