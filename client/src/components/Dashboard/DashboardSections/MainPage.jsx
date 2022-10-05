import React from "react";
import UserDailyEvents from "./UserDailyEvents/UserDailyEvents";
import UserRatings from "./UserRatings/UserRatings";
import { selectUser } from "../../../redux/user";
import { useSelector } from "react-redux";

const MainPage = () => {
	const { user } = useSelector(selectUser);

	return (
		<div className="mainpage-container">
			<h1 className="font-semibold text-3xl">
				Good morning, {user?.firstName}!
			</h1>
			<div className="daily-events">
				<UserDailyEvents />
			</div>
			<div className="user-ratings">
				<UserRatings />
			</div>
		</div>
	);
};

export default MainPage;
