import React, { useState } from "react";
import ProjectProgressBar from "./ProjectProgressBar/ProjectProgressBar";
import ProgressBar from "@ramonak/react-progress-bar";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { AiFillCopy } from "react-icons/ai";

const Team = ({ team }) => {
	const [showTeam, setShowTeam] = useState(false);

	const teamMembers = team.members.length;

	return (
		<div className="flex flex-col p-10 mb-5 bg-lightgray2  rounded-lg">
			<div className="flex flex-col">
				<div className="flex flex-row justify-between mb-3">
					<div className="team-details">
						<span className="font-bold">
							Team Name:
							<br />
						</span>
						<span>{team.teamName}</span>
					</div>
					<div className="team-details">
						<span className="font-bold">
							Project Name:
							<br />
						</span>
						<span> {team.projectName}</span>
					</div>
					<div className="flex flex-col content-center justify-center text-center items-center">
						<span className="font-bold">
							Code:
							<br />
						</span>
						<span> {team.teamCode}</span>
						<AiFillCopy
							onClick={() =>
								navigator.clipboard.writeText(
									`${team.teamCode}`
								)
							}
							style={{ cursor: "pointer" }}
						/>
					</div>
				</div>
				<div className={`${!showTeam ? "block" : "hidden"}`}>
					<hr className="bg-white border-gray mb-4 mt-4" />
					<div className="main-bottom">
						<span>
							{teamMembers === 0 && (
								<h4>
									There are currently no members in this team.
								</h4>
							)}
							{teamMembers === 1 && (
								<span>
									There is currently {teamMembers} member in
									this team.
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
					<hr className="bg-white border-gray mb-4 mt-4" />

					<div className="">
						<ProjectProgressBar
							startDate={team.dateCreated}
							endDate={team.endDate}
							sprints={team.sprints}
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-center content-center mt-3">
				{showTeam ? (
					<BsFillArrowDownSquareFill
						style={{
							cursor: "pointer",
							width: "20px",
							height: "20px",
						}}
						onClick={() => setShowTeam(!showTeam)}
					/>
				) : (
					<BsFillArrowUpSquareFill
						style={{
							cursor: "pointer",
							width: "20px",
							height: "20px",
						}}
						onClick={() => setShowTeam(!showTeam)}
					/>
				)}
			</div>
		</div>
	);
};

export default Team;
