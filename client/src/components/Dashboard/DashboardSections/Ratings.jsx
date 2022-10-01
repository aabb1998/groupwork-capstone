import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, update } from "../../../redux/user";
import TeamRating from "../TeamRating/TeamRating";

const Ratings = () => {
	const { user } = useSelector(selectUser);

	return (
		<div className="overflow-hidden">
			{user ? (
				user.teams.map((team, index) => (
					<TeamRating team={team} user={user} />
				))
			) : (
				<h4>Please login.</h4>
			)}
		</div>
	);
};

export default Ratings;
