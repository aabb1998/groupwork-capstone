import React from "react";
import { Link } from "react-router-dom";
import googleSvg from "../../../Assets/SignUp/google.svg";
import ChatIcon from "../../../Assets/Dashboard/Chat_solid.png";
import DevicesIcon from "../../../Assets/Dashboard/Devices_solid.png";
import emojiIcon from "../../../Assets/Dashboard/emoji_solid.png";
import FeedIcon from "../../../Assets/Dashboard/Feed_solid.png";
import GroupIcon from "../../../Assets/Dashboard/Group.png";
import MailIcon from "../../../Assets/Dashboard/Mail_solid.png";
import SwitchIcon from "../../../Assets/Dashboard/Switch_solid.png";
import { selectDashboard, updateDashboard } from "../../../redux/counter";
import { useSelector, useDispatch } from "react-redux";

const DashboardLeftMenu = () => {
	const userDashboard = useSelector(selectDashboard);
	const dispatch = useDispatch();

	return (
		<div className="mt-10 border-r-indigo-500">
			<div className="flex flex-col">
				<div className="flex flex-col text-center mb-10">
					{[
						["Main Page", "/", FeedIcon, 0, 0],
						["Teams", "/", DevicesIcon, 1, 0],
						["Calendar", "/", emojiIcon, 2, 0],
						["Project Board", "/", FeedIcon, 3, 0],
						["Project Tasks", "/", SwitchIcon, 4, 2, "red"],
						["Ratings", "/", GroupIcon, 5, 0],
						["Inbox", "/", MailIcon, 6, 5, "green"],
						["Notifications", "/", ChatIcon, 7, 10, "yellow"],
					].map(
						([
							title,
							url,
							icon,
							dashboardPosition,
							notifications,
							color,
						]) => (
							<div className="flex flex-row justify-between text-center">
								<div className="icons">
									<Link
										className="hover:text-lightBlue mb-6 flex flex-row text-sm font-semibold text-black"
										key={title}
										to="/dashboard"
										onClick={() =>
											dispatch(
												updateDashboard(
													dashboardPosition
												)
											)
										}
									>
										<img
											src={icon}
											alt=""
											style={{
												color: "black",
											}}
											className="mr-5 w-6 h-6 hover:color-lightBlue"
										/>

										{title}
									</Link>
								</div>
								{notifications > 0 && (
									<div
										style={{ background: color }}
										className="bg-slate-500 h-6 w-6 rounded-lg text-center items-center text-sm"
									>
										<span
											style={{
												color: "black",
												opacity: 1,
												fontWeight: "bold",
											}}
										>
											{notifications}
										</span>
									</div>
								)}
							</div>
						)
					)}
				</div>
			</div>
			<div className="menu__peers">
				<div className="peers">
					<div className="peer">Peter Taylor</div>
					<div className="peer">Peter Taylor</div>
					<div className="peer">Peter Taylor</div>
				</div>
			</div>
			<div className="dragFile"></div>
			<div className="theme"></div>
		</div>
	);
};

export default DashboardLeftMenu;
