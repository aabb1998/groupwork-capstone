import React from 'react';
import { Calendar, momentLocalizer, BigCalendar } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEvents from './CalendarEvents';
import { useEffect } from 'react';

const localizer = momentLocalizer(moment);
var currentTime = new Date();
const currentYear = currentTime.getFullYear();
const currentDay = currentTime.getDay();
const currentMonth = currentTime.getMonth();

const teamCalendar = (props) => {
  const addDate = () => {
    CalendarEvents.concat({
      title: 'Haytch Test',
      start: new Date(2021, 3, 2),
      end: new Date(2021, 3, 3),
    });
  };

  addDate();

  useEffect(() => {}, [CalendarEvents]);

  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        events={CalendarEvents}
        style={{ height: 500 }}
        step={60}
        defaultDate={new Date(2021, currentMonth, currentDay)}
      />
    </div>
  );
};

export default teamCalendar;
