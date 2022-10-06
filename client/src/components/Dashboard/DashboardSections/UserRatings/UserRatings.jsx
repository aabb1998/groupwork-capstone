import React, { useEffect } from 'react';
import { MdEventBusy } from 'react-icons/md';
import { FcRating } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../../../redux/user';
import { selectDashboard, updateDashboard } from '../../../../redux/counter';

import TeamRating from './TeamRating';
import { useNavigate } from 'react-router-dom';

const UserRatings = () => {
  const { user } = useSelector(selectUser);
  let navigate = useNavigate();
  const userDashboard = useSelector(selectDashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    user.teams.map((team, index) => {
      console.log(team.teamName);
    });
  }, [user]);

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
      <div
        className="ratings"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          className="team-rating"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {user?.teams?.map((team, index) => (
            <TeamRating team={team} index={index} />
          ))}
        </div>
        <div className="view-more text-center align-middle flex flex-row justify-center items-center ">
          <button
            onClick={() => dispatch(updateDashboard(5))}
            className="view-more text-center align-middle flex flex-row justify-center items-center bg-lightBlue p-2 rounded-xl text-white w-40"
          >
            <span className="mr-2 text-sm">Add rating</span>
            <FcRating />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserRatings;
