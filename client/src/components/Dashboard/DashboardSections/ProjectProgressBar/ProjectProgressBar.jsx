import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./styles.scss";
import { useEffect } from "react";
import { useState } from "react";
import ProjectReview from "../ProjectReview/ProjectReview";

const ProjectProgressBar = ({ startDate, endDate, sprints }) => {
	const [progress, setProgress] = useState(0);
	const [sprintDates, setSprintDates] = useState();
	const [sprintCount, setSprintCount] = useState(0);
	const [nextReview, setNextReview] = useState();
	const [durationPerSprint, setDurationPerSprint] = useState(0);
	const [sprintDays, setSprintDays] = useState();

	const getSprintDates = async () => {
		var projectStart = startDate.split("T")[0];
		var projectEnd = endDate.split("T")[0];
		var projectStart = Date.parse(projectStart);
		var projectEnd = Date.parse(projectEnd);

		var difference = (projectEnd - projectStart) / (1000 * 3600 * 24);
		var daysPerSprint = Math.floor(difference / sprints);
		let currentDate = projectStart;
		let arr = [];
		for (let i = 0; i < sprints; i++) {
			// currentDate += daysToMilliseconds(daysPerSprint);
			var dateToAdd = daysToMilliseconds(daysPerSprint);
			currentDate += dateToAdd;
			var date = new Date(currentDate);

			arr.push(date.toDateString());
		}
		setSprintDates(arr);
		setDurationPerSprint(daysPerSprint);
		let arr1 = [];
		let count = 0;
		for (let i = 0; i < sprints; i++) {
			count += durationPerSprint;
			arr1.push(count);
		}
		setSprintDays(arr1);
	};

	const daysToMilliseconds = (days) => {
		return days * 24 * 60 * 60 * 1000;
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

	useEffect(() => {
		calculateTimeToReview();
	}, [sprintDates]);

	const calculateTimeToReview = () => {
		const currentDate = new Date().getTime();
		let findNextReview;
		for (let i = 0; i < sprintDays?.length; i++) {
			if (progress <= sprintDays[i]) {
				findNextReview = sprintDates[i];
				setSprintCount(i);
				break;
			}
		}
	};

	useEffect(() => {
		setNextReview(sprintDates?.[sprintCount]);
	}, [sprintDates]);

	return (
		<div className="">
			<div className="flex justify-between mt-10">
				{sprintDates?.length === sprints &&
					sprintDates.map((date, index) => (
						<div key={index} className="flex flex-col">
							<span className="font-semibold">
								Sprint {index + 1}:
							</span>
							<span>{date}</span>
						</div>
					))}
			</div>
			<ProgressBar
				completed={progress}
				className="wrapper"
				barContainerClassName="container"
				labelClassName="label"
				maxCompleted={100}
				animateOnRender={true}
			/>
			<ProjectReview
				nextReview={nextReview}
				sprintCount={sprintCount}
				sprintDates={sprintDates}
			/>
		</div>
	);
};

export default ProjectProgressBar;
