import React from 'react';
import TeamRating from './TeamRating';

const UserRatings = () => {
  return (
    <div
      className="mt-10 mb-10 rounded-xl"
      style={{
        backgroundColor: 'rgba(217, 217, 217, 0.24)',
        padding: '20px',
        opacity: 0.8,
      }}
    >
      <div className="heading">
        <h4 className="text-lg font-semibold mb-5">Your ratings</h4>
      </div>
      <div className="ratings">
        <div className="team-rating">
          <TeamRating />
        </div>
      </div>
    </div>
  );
};

export default UserRatings;
