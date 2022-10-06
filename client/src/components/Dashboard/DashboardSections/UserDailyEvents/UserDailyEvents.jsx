import React, { useEffect, useState } from "react";
import CalendarEvent from "./CalendarEvent";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, update } from "../../../../redux/user";
import { selectDashboard, updateDashboard } from "../../../../redux/counter";
import { store } from "../../../../redux/configureStore";
import axios from "axios";
import { MdEventBusy } from "../../../../../node_modules/react-icons/md";
import { useNavigate } from "react-router-dom";

const UserDailyEvents = () => {
	const { user } = useSelector(selectUser);
	const [teamCodes, setTeamCodes] = useState();
	const [events, setEvents] = useState();
	const [hasEvents, setHasEvents] = useState(false);
	const [todayEvents, setTodayEvents] = useState();

	let navigate = useNavigate();
	const userDashboard = useSelector(selectDashboard);
	const dispatch = useDispatch();
	useEffect(() => {
		if (user) {
			getEndpoints();
		}
	}, []);

	const getEndpoints = async () => {
		let teamArray = [];
		const getTeamCodes = await user?.teams?.map((team, index) => {
			teamArray.push(
				`http://localhost:3000/api/getCalendarEvents/${team.teamCode}`
			);
		});
		setTeamCodes(teamArray);
		if (teamArray != null && teamArray.length != 0) {
			fetchEvents(teamArray);
			setHasEvents(true);
		}
	};

	const fetchEvents = async (teamArray) => {
		let allEvents = [];
		const request = await axios
			.all(teamArray.map((endpoint) => axios.get(endpoint)))
			.then((data) =>
				data.map((team, index) => {
					allEvents.push(team.data.data);
				})
			);
		allEvents = allEvents.flat();

		setEvents(allEvents);
		checkDates(allEvents);
	};

	const checkDates = (allEvents) => {
		const todaysEvents = [];

		const datesCompare = allEvents.map((event, index) => {
			let eventDateStart = event.start;
			let eventDateEnd = event.end;
			let newStartDate = new Date(eventDateStart).toLocaleDateString();
			let newEndDate = new Date(eventDateEnd).toLocaleDateString();
			let todaysDate = new Date().toLocaleDateString();
			if (todaysDate >= newStartDate && todaysDate <= newEndDate) {
				todaysEvents.push(event);
			}
		});

		setTodayEvents(todaysEvents);
	};

	useEffect(() => {
		console.log(todayEvents);
	}, [todayEvents]);

	return (
		<div
			className="mt-10 mb-10 rounded-xl"
			style={{
				backgroundColor: "rgba(217, 217, 217, 0.24)",
				padding: "20px",
				opacity: 0.8,
			}}
		>
			<div className="header">
				<h4 className="text-lg font-semibold mb-5">Today's events</h4>
			</div>
			<div className="events flex flex-row justify-between text-left content-center">
				<div className="all-events flex flex-wrap ">
					{todayEvents ? (
						todayEvents.map((event, index) => (
							<CalendarEvent eventData={event} key={index} />
						))
					) : (
						<h4>You have no events today.</h4>
					)}
				</div>
				<div className="view-more text-center align-middle flex flex-row justify-center items-center ">
					<button
						onClick={() => dispatch(updateDashboard(2))}
						className="view-more text-center align-middle flex flex-row justify-center items-center bg-lightBlue p-2 rounded-xl text-white w-40"
					>
						<span className="mr-2 text-sm">View All</span>
						<MdEventBusy />
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserDailyEvents;
