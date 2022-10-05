import React, { useEffect } from "react";

const CalendarEvent = ({ eventData }) => {
	const colors = {
		Meeting: "#D09FE8",
		"1on1": "#86DB43",
		Review: "#B22F5E",
		"Team Collaboration": "#B22F5E",
		"Feature Review": "#B22F5E",
	};
	const style = {
		background: colors[`${eventData.meetingType}`],
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: "10px",
		padding: "12px",
		width: "200px",
		marginRight: "20px",
	};

	useEffect(() => {
		console.log(eventData);
	}, [eventData]);

	return (
		<div className="event" style={style}>
			<div className="icon"></div>
			<div className="event-details">
				<div className="font-bold">{eventData.title}</div>
				<div className="text-sm">{eventData.teamName}</div>
				<div className="text-sm">{eventData.meetingType}</div>

				<div className="font-bold">
					{new Date(eventData.start).toLocaleTimeString()}
				</div>
			</div>
		</div>
	);
};

export default CalendarEvent;
