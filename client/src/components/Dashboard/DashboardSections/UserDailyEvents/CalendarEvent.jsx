import React, { useEffect } from "react";
import { GrGroup } from "../../../../../node_modules/react-icons/gr";
import { MdLocalLibrary } from "../../../../../node_modules/react-icons/md";
import { MdRateReview } from "../../../../../node_modules/react-icons/md";
import { RiStackshareFill } from "../../../../../node_modules/react-icons/ri";
import { MdFeaturedPlayList } from "../../../../../node_modules/react-icons/md";

const CalendarEvent = ({ eventData }) => {
	const colors = {
		Meeting: ["#D09FE8", GrGroup],
		"1on1": ["#86DB43", MdLocalLibrary],
		Review: ["#B22F5E", MdRateReview],
		"Team Collaboration": ["#B22F5E", RiStackshareFill],
		"Feature Review": ["#B22F5E", MdFeaturedPlayList],
	};
	const style = {
		background: colors[`${eventData.meetingType}`][0],
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
		borderRadius: "10px",
		padding: "12px",
		width: "200px",
		marginRight: "20px",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: "5px",
	};

	useEffect(() => {
		console.log(eventData);
	}, [eventData]);

	return (
		<div className="event" style={style}>
			<div
				className="icon"
				style={{
					marginRight: "10px",
				}}
			>
				{eventData.meetingType === "Meeting" && <GrGroup />}
				{eventData.meetingType === "1on1" && <MdLocalLibrary />}
				{eventData.meetingType === "Review" && <MdRateReview />}
				{eventData.meetingType === "Team Collaboration" && (
					<RiStackshareFill />
				)}
				{eventData.meetingType === "Feature Review" && (
					<MdFeaturedPlayList />
				)}
			</div>
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
