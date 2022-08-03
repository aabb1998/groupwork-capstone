import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { store } from './../../redux/configureStore';
import { update, selectUser } from '../../redux/user';

import DashboardNavbar from './DashboardNavbar/DashboardNavbar';
import JoinTeam from './JoinTeam/JoinTeam';

const Dashboard = () => {
  const [teamData, setTeamData] = useState({
    teamName: '',
    dateCreated: new Date().toISOString(),
    projectName: '',
    members: [],
    teamCode: '',
  });
  const [newUserData, setNewUserData] = useState();

  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  const generateCode = () => {
    var result = [];
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join('');
  };

  useEffect(() => {
    if (!teamData.members.find((lookup) => lookup.email === user.email)) {
      setTeamData({ members: [...teamData.members.concat(user)] });
    }
  }, [user]);

  const handleChange = ({ currentTarget: input }) => {
    setTeamData({ ...teamData, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = generateCode();
    teamData.teamCode = code;
    try {
      const response = await axios.post(
        'http://localhost:3000/api/addteam',
        teamData
      );
      console.log('Team created.');
      console.log(response);
      resetValues();
      // updateUser();
    } catch (error) {
      console.log(error.response.data.message);
      resetValues();
    }
  };

  // const updateUser = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:3000/api/findUser/${user.email}`
  //     );
  //     console.log(response);
  //     dispatch(update(response.data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const resetValues = () => {
    setTeamData({
      teamName: '',
      dateCreated: new Date().toISOString(),
      projectName: '',
      members: [...teamData.members],
      teamCode: '',
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
              value={teamData.teamName}
              type="text"
            />
            <span>Project name:</span>
            <input
              onChange={handleChange}
              name="projectName"
              required
              placeholder="Project Name"
              value={teamData.projectName}
              type="text"
            />
            <button onSubmit={handleSubmit} type="submit">
              Create Team
            </button>
          </form>
        </div>
      </div>
      <JoinTeam />
    </div>
  );
};

export default Dashboard;
