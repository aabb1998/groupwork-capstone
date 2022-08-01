import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { store } from './../../redux/configureStore';
import { update, selectUser } from '../../redux/user';

import DashboardNavbar from './DashboardNavbar/DashboardNavbar';

const Dashboard = () => {
  const [teamData, setTeamData] = useState({
    teamName: '',
    dateCreated: new Date().toISOString(),
    projectName: '',
    members: [],
  });

  const [newUserData, setNewUserData] = useState();

  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: input }) => {
    setTeamData({ ...teamData, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/addteam',
        teamData
      );
      console.log('Team created.');
      console.log(response);
      updateUser();
      setTeamData({ members: [...teamData.members.concat(user)] });
      setTeamData({ userId: user._id });
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/findUser/${user.email}`
      );
      console.log(response);
      dispatch(update(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const resetValues = () => {
    setTeamData({
      teamName: '',
      dateCreated: new Date().toISOString(),
      projectName: '',
      members: [],
    });
  };

  return (
    <div>
      <div>
        <DashboardNavbar />
      </div>
      <div className="team-modal">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <span>Team name:</span>
            <input
              onChange={handleChange}
              name="teamName"
              required
              placeholder="Team Name"
              value={teamData.teamName || undefined}
              type="text"
            />
            <span>Project name:</span>
            <input
              onChange={handleChange}
              name="projectName"
              required
              placeholder="Project Name"
              value={teamData.projectName || undefined}
              type="text"
            />
            <button onSubmit={handleSubmit} type="submit">
              Create Team
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
