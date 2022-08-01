import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { store } from './../../redux/configureStore';
import { selectUser } from './../../redux/user';
import DashboardNavbar from './DashboardNavbar/DashboardNavbar';

const Dashboard = () => {
  const [teamData, setTeamData] = useState({
    teamName: '',
    dateCreated: new Date().toISOString(),
    projectName: '',
    members: [],
  });

  const user = useSelector(selectUser);

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

  useEffect(() => {
    console.log(user);
    setTeamData({ members: [...teamData.members.concat(user)] });
    console.log(user);
  }, [user]);

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
