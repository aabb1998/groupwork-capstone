import React, { useEffect, useState } from 'react';
import CalendarEvent from './CalendarEvent';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, update } from '../../../../redux/user';
import axios from 'axios';
const UserDailyEvents = () => {
  const { user } = useSelector(selectUser);
  const [teamCodes, setTeamCodes] = useState();
  const [events, setEvents] = useState();
  const [hasEvents, setHasEvents] = useState(false);
  const [todayEvents, setTodayEvents] = useState();

  useEffect(() => {
    if (user) {
      getEndpoints();
    }
  }, []);

  const getEndpoints = async () => {
    let teamArray = [];
    const getTeamCodes = await user?.teams?.map((team, index) => {
      teamArray.push(
        `http://localhost:3000/api/getCalendarEvents/${team.teamCode}`
      );
    });
    setTeamCodes(teamArray);
    if (teamArray != null && teamArray.length != 0) {
      fetchEvents(teamArray);
      setHasEvents(true);
    }
  };

  const fetchEvents = async (teamArray) => {
    let allEvents = [];
    const request = await axios
      .all(teamArray.map((endpoint) => axios.get(endpoint)))
      .then((data) =>
        data.map((team, index) => {
          allEvents.push(team.data.data);
        })
      );
    allEvents = allEvents.flat();

    setEvents(allEvents);
    checkDates(allEvents);
  };

  const checkDates = (allEvents) => {
    const todaysEvents = [];

    const datesCompare = allEvents.map((event, index) => {
      let eventDateStart = event.start;
      let eventDateEnd = event.end;
      let newStartDate = new Date(eventDateStart).toLocaleDateString();
      let newEndDate = new Date(eventDateEnd).toLocaleDateString();
      let todaysDate = new Date().toLocaleDateString();
      if (todaysDate >= newStartDate && todaysDate <= newEndDate) {
        todaysEvents.push(event);
      }
    });

    setTodayEvents(todaysEvents);
  };

  useEffect(() => {
    console.log(todayEvents);
  }, [todayEvents]);

  return (
    <div
      className="mt-10 mb-10 rounded-xl"
      style={{
        backgroundColor: 'rgba(217, 217, 217, 0.24)',
        padding: '20px',
        opacity: 0.8,
      }}
    >
      <div className="header">
        <h4 className="text-lg font-semibold mb-5">Today's events</h4>
      </div>
      <div className="events flex flex-row justify-between text-left content-center">
        <div className="all-events flex flex-row">
          {todayEvents &&
            todayEvents.map((event, index) => (
              <CalendarEvent eventData={event} key={index} />
            ))}
        </div>
        <div className="view-more text-center align-middle flex flex-col justify-center">
          <span>View more</span>
        </div>
      </div>
    </div>
  );
};

export default UserDailyEvents;
