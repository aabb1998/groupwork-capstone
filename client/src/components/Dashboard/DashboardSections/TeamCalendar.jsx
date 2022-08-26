import React, { useState } from "react";
import { Calendar, momentLocalizer, BigCalendar } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarEvents from "./CalendarEvents";
import { useEffect } from "react";

const localizer = momentLocalizer(moment);
var currentTime = new Date();
const currentYear = currentTime.getFullYear();
const currentDay = currentTime.getDay();
const currentMonth = currentTime.getMonth();

const teamCalendar = (props) => {
	const [calendarEvents, setCalendarEvents] = useState([]);

	useEffect(() => {
		setCalendarEvents(CalendarEvents);
	}, [CalendarEvents]);

	const handleSelect = ({ start, end }) => {
		console.log(start);
		const title = window.prompt("New Event name");
		if (title) {
			var newEvent = {
				start: start,
				end: end,
				title: title,
			};
			setCalendarEvents([...calendarEvents, newEvent]);
			console.log(calendarEvents);
		}
	};

	return (
		<div>
			{calendarEvents && (
				<Calendar
					selectable
					localizer={localizer}
					startAccessor="start"
					endAccessor="end"
					onSelectSlot={handleSelect}
					events={calendarEvents}
					style={{ height: 500 }}
					step={60}
					defaultDate={
						new Date(currentYear, currentMonth, currentDay)
					}
				/>
			)}
		</div>
	);
};

export default teamCalendar;
