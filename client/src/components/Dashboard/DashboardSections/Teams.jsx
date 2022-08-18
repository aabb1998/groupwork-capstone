import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, update } from "../../../redux/user";
import Team from "./Team";

const Teams = () => {
	const { user } = useSelector(selectUser);

	return (
		<div className="w-">
			<div className="teams-header">
				<h4>Your teams</h4>
			</div>
			<div className="teams">
				{user ? (
					user.teams.map((team, index) => (
						<Team team={team} key={index} />
					))
				) : (
					<h4>Please login.</h4>
				)}
			</div>
		</div>
	);
};

export default Teams;
