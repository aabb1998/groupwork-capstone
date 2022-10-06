import React from "react";

const TeamRating = ({ team }) => {
	return (
		<div
			style={{
				background: "#EEEEEE",
				boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
				padding: "10px",
				width: "200px",
				borderRadius: "7px",
				height: "105px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
				marginRight: "20px",
				marginBottom: "10px",
			}}
		>
			<h5 className="text-base font-bold">{team.teamName}</h5>
		</div>
	);
};

export default TeamRating;
