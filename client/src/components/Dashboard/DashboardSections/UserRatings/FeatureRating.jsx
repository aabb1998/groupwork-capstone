import React, { useEffect, Component } from "react";
import { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const featureRating = ({ ratingData }) => {
	const [collaboration, setCollaboration] = useState(0);
	const [communication, setCommunication] = useState(0);
	const [functionality, setFunctionality] = useState(0);
	const [userRating, setUserRating] = useState(0);
	const [calculated, setCalculated] = useState(false);

	const mark = 6.5;

	const options = {
		chart: {
			backgroundColor: "lightgray",
		},
		xAxis: {
			categories: ["Communication", "Collaboration", "Functionality"],
		},

		yAxis: {
			label: "H",
			text: "h",
		},
		title: {
			text: `Peer ratings for ${ratingData.title}`,
		},
		series: [
			{
				polar: true,
				backgroundColor: "#FCFFC5",
				type: "bar",
				data: [
					{
						y: parseFloat(communication),
						color: "#D09FE8",
					},
					{ y: parseFloat(collaboration), color: "#86DB43" },
					{
						y: parseFloat(functionality),
						color: "#B22F5E",
					},
				],
			},
		],
	};
	const getCommunication = () => {
		let comm = [];
		if (ratingData) {
			ratingData.ratings.map((communication, index) => {
				comm.push(communication.communicationRating);
			});
		}
		let total = 0;
		for (let i = 0; i < comm.length; i++) {
			total += comm[i];
		}

		setCommunication((total / comm.length).toFixed(2));
		return (total / comm.length).toFixed(2);
	};

	const getCollaboration = () => {
		let coll = [];
		if (ratingData) {
			ratingData.ratings.map((collaboration, index) => {
				coll.push(collaboration.collaborationRating);
			});
		}
		let total = 0;
		for (let i = 0; i < coll.length; i++) {
			total += coll[i];
		}

		setCollaboration((total / coll.length).toFixed(2));
		return setCollaboration((total / coll.length).toFixed(2));
	};

	const getFunctionality = () => {
		let func = [];
		if (ratingData) {
			ratingData.ratings.map((functionality, index) => {
				func.push(functionality.collaborationRating);
			});
		}
		let total = 0;
		for (let i = 0; i < func.length; i++) {
			total += func[i];
		}
		let average = (total / func.length).toFixed(2);
		setFunctionality(average);
		return (total / func.length).toFixed(2);
	};

	useEffect(() => {
		setUserRating(
			(
				(parseFloat(communication) +
					parseFloat(collaboration) +
					parseFloat(functionality)) /
				3
			).toFixed(2)
		);
	}, [communication, collaboration, functionality]);

	// const getUserRating = () => {
	//   let value = communication;
	//   console.log(value);
	// };

	useEffect(() => {
		getCommunication();
		getCollaboration();
		getFunctionality();
		setCalculated(true);
		// getUserRating();
	}, [ratingData]);

	// useEffect(() => {
	//   console.log(userRating);
	// }, [userRating]);

	return (
		<div
			style={{
				background: "#ffffff",
				boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
				borderRadius: "11px",
				padding: "10px",
				margin: "10px",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
				className="header"
			>
				<div className="">
					<h1 className="font-bold">{ratingData.title}</h1>
					<span className="font-semibold italic text-sm">
						Feature Description: {ratingData.description}
					</span>
				</div>

				<span>{ratingData.ratings.length}</span>
			</div>
			{/* <div className="rating-details">
        <span>Communication rating: {communication}</span>
        <span>Collaboration rating: {collaboration}</span>
        <span>Functionality rating: {functionality}</span>
      </div> */}
			<div
				className="charts"
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				<div
					className="left-chart"
					style={{
						width: "400px",
						marginTop: "20px",
						backgroundColor: "lightgray",
						borderRadius: "0px 10px 10px 0px",
						padding: "10px",
					}}
				>
					{ratingData && (
						<HighchartsReact
							highcharts={Highcharts}
							options={options}
						/>
					)}
				</div>
				<div
					className=""
					style={{
						width: "200px",
					}}
				>
					<h4>Overall Feature Rating</h4>
					<CircularProgressbar
						value={userRating * 20}
						text={`${userRating}/5`}
					/>
					;
				</div>
			</div>
		</div>
	);
};

export default featureRating;
