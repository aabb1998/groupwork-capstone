import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../redux/configureStore";
import { selectUser } from "../../../redux/user";
import DatePicker from "react-datepicker";
import { useState } from "react";
import axios from "axios";

const AddCalendarEvent = ({ show }) => {
	const { user } = useSelector(selectUser);
	const [endDate, setEndDate] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date());
	const [showModal, setShowModal] = useState(false);

	const [eventData, setEventData] = useState({
		eventName: "",
		startDate,
		teamName: "",
		endDate,
	});

	const handleChange = ({ currentTarget: input }) => {
		setEventData({ ...eventData, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		eventData.startDate = startDate;
		eventData.endDate = endDate;
		const findTeam = user.teams.filter((obj) => {
			return obj.teamName === eventData.teamName;
		});
		const foundCode = findTeam[0].teamCode;

		try {
			const response = await axios.post(
				`http://localhost:3000/api/addCalendarEvent/${foundCode}`,
				eventData
			);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto my-6 mx-auto max-w-3xl">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
							<h3 className="text-3xl font-semibold">
								Add calendar event
							</h3>
							<button
								className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => setShowModal(false)}
							>
								<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
									×
								</span>
							</button>
						</div>
						<div className="relative p-6 flex-auto">
							<p className=" text-slate-500 text-lg leading-relaxed">
								Enter the details of the event you would like to
								add <br /> to your calendar.
							</p>
						</div>
						<div className="relative p-6 flex-auto">
							<div className="mb-5 w-72 justify-between flex">
								<span>Choose team:</span>
								<select
									className="border-2 rounded-lg
                                    pl-1 pr-1 cursor-pointer"
									name="teamName"
									value={eventData.teamName}
									id="team"
									onChange={handleChange}
									required
								>
									{user?.teams?.map((team, index) => (
										<option
											value={team.teamName}
											key={index}
										>
											{team.teamName}
										</option>
									))}
								</select>
							</div>
							<div className="mb-5 w-72 justify-between flex">
								<span>Event name:</span>
								<input
									style={{
										padding: "0px 3px",
										borderRadius: "7px",
										width: "170px",
										fontSize: "10px",
									}}
									type="text"
									className="border-2 rounded-lg"
									placeholder="Event name"
									value={eventData.eventName}
									required
									name="eventName"
									onChange={handleChange}
								/>
							</div>
							<div className="mb-5 w-72 justify-between flex flex-row">
								<span className="w-56">Event Start:</span>
								<DatePicker
									selected={startDate}
									required
									onChange={(date: Date) =>
										setStartDate(date)
									}
									className="border-2 rounded-lg"
								/>
							</div>
							<div className="mb-5 w-72 justify-between flex flex-row">
								<span className="w-56">Event End:</span>
								<DatePicker
									required
									selected={endDate}
									onChange={(date: Date) => setEndDate(date)}
									className="border-2 rounded-lg"
								/>
							</div>
						</div>
						{/*footer*/}
						<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
							<button
								className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={handleSubmit}
							>
								Create Event
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
};

export default AddCalendarEvent;
