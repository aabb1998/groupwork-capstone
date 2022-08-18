import React from "react";

const Team = ({ team }) => {
	const teamMembers = team.members.length;

	return (
		<div className="flex flex-col p-10 mb-5 bg-lightgray2  rounded-lg">
			<div className="flex flex-col">
				<div className="flex flex-row justify-between">
					<div className="team-details">
						<span>Team Name: {team.teamName}</span>
						<span>Project Name:{team.projectName}</span>
					</div>
					<div className="team-code">
						<span>Code:{team.teamCode}</span>
					</div>
				</div>
				<div className="main-bottom">
					<span>
						{teamMembers === 0 && (
							<h4>
								There are currently no members in this team.
							</h4>
						)}
						{teamMembers === 1 && (
							<span>
								There is currently {teamMembers} member in this
								team.
							</span>
						)}
						{teamMembers > 1 && (
							<span>
								There are currently {teamMembers} members in
								this team.
							</span>
						)}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Team;
