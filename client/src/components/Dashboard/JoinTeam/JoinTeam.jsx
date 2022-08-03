import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../../redux/configureStore';
import { selectUser, update } from './../../../redux/user';
import axios from 'axios';

const JoinTeam = () => {
  const [teamCode, setTeamCode] = useState('');

  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    setTeamCode('');
    e.preventDefault();
    console.log(teamCode);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/jointeam/${teamCode}`,
        user
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log('Submitted');
  };

  const handleChange = (event) => {
    setTeamCode(event.target.value);
  };

  const resetValues = () => {
    setTeamCode('');
  };
  return (
    <div className="mt-20 bg-neutral-400">
      <form action="submit" onSubmit={handleSubmit}>
        <span>Enter team Code</span>
        <input
          onChange={handleChange}
          name="teamCode"
          required
          placeholder="Team Code"
          value={teamCode}
          type="text"
        />
        <button onSubmit={handleSubmit} type="submit">
          Join Team
        </button>
      </form>
    </div>
  );
};

export default JoinTeam;
