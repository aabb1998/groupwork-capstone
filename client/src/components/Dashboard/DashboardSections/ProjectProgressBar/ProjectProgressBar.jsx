import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./styles.scss";
import { useEffect } from "react";
import { useState } from "react";

const ProjectProgressBar = ({ startDate, endDate, sprints }) => {
	const [progress, setProgress] = useState(0);
	const [sprintDates, setSprintDates] = useState([]);

	const getSprintDates = () => {
		var myDate = startDate.split("T")[0];
		var myDate = myDate.split("-");
		var newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
		console.log(newDate.getTime());
	};

	useEffect(() => {
		const startDateParsed = Date.parse(startDate);
		const currentDate = new Date().getTime();
		const endDateParsed = Date.parse(endDate);
		const daysElapsed =
			Math.ceil(currentDate - startDateParsed) / (1000 * 3600 * 24);
		const difference = endDateParsed - currentDate;
		const totalDays = Math.ceil(difference / (1000 * 3600 * 24));
		// console.log((daysElapsed / totalDays) * 100);
		getSprintDates();
		setProgress(Math.floor((daysElapsed / totalDays) * 100));
	}, []);

	return (
		<div className="">
			<div className="flex justify-between mt-10">
				<div className="flex flex-col">
					<span className="font-semibold">Project Start:</span>
					<span> {startDate.split("T")[0]}</span>
				</div>
				<div className="flex flex-col">
					<span className="font-semibold">Sprint 2:</span>
					<span> {startDate.split("T")[0]}</span>
				</div>
				<div className="flex flex-col">
					<span className="font-semibold">Sprint 3:</span>
					<span> {startDate.split("T")[0]}</span>
				</div>
				<div className="flex flex-col">
					<span className="font-semibold">Sprint 4:</span>
					<span> {startDate.split("T")[0]}</span>
				</div>
				<div className="flex flex-col">
					<span className="font-semibold">Project End:</span>
					<span> {endDate.split("T")[0]}</span>
				</div>
			</div>
			<ProgressBar
				completed={progress}
				className="wrapper"
				barContainerClassName="container"
				labelClassName="label"
				maxCompleted={100}
				animateOnRender={true}
			/>
		</div>
	);
};

export default ProjectProgressBar;
