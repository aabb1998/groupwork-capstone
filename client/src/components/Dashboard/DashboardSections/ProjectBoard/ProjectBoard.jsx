import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../../redux/user";
import Board, { moveCard } from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import TeamBoard from "./TeamBoard";
import axios from "axios";

const ProjectBoard = () => {
	const [teamCode, setTeamcode] = useState("vPL6M");
	const { user } = useSelector(selectUser);

	function handleCardMove(_card, source, destination) {
		const updatedBoard = moveCard(controlledBoard, source, destination);
		setBoard(updatedBoard);
	}

	const getTeamData = async (teamCode) => {
		const teamFeatures = [];
		try {
			const response = await axios.get(
				`http://localhost:3000/api/getfeatures/${teamCode}`
			);
			console.log("Fetching features.");
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	const board = {
		columns: [
			{
				id: 1,
				title: "Backlog",
				cards: [
					{
						id: 1,
						title: "Add card",
						description: "Add capability to add a card in a column",
					},
					{
						id: 0,
						title: "Prosure",
						description: "e1484100-c07f-4780-a170-cfab1965e3bd",
					},
					{
						id: 1,
						title: "Vortexaco",
						description: "24a8bdb0-433f-4274-ad2f-e0387e4807c4",
					},
					{
						id: 2,
						title: "Polarax",
						description: "a2c92c2c-4529-4f0e-8480-2a88247b39b3",
					},
				],
			},
			{
				id: 2,
				title: "In Progress",
				cards: [
					{
						id: 2,
						title: "Drag-n-drop support",
						description: "Move a card between the columns",
					},
					{
						id: 0,
						title: "Bristo",
						description: "780ca2a6-5354-43ed-9a69-6e8bface5db5",
					},
					{
						id: 1,
						title: "Liquidoc",
						description: "f8fdbdcf-fbd7-453d-909a-47b6bd69ff3c",
					},
					{
						id: 2,
						title: "Cofine",
						description: "adb3b0df-2260-4904-9e5b-7aada2551fa5",
					},
				],
			},
			{
				id: 3,
				title: "Completesdsdd",
				cards: [
					{
						id: 42,
						title: "Drag-n-drop support",
						description: "Move a card between the columns",
					},
					{
						id: 0,
						title: "Earwax",
						description: "56ee43ab-9f44-448c-8740-3af174668d2d",
					},
					{
						id: 1,
						title: "Evidends",
						description: "949b3f66-ec51-450a-8426-c29d3c5340f5",
					},
					{
						id: 2,
						title: "Tersanki",
						description: "6267a26a-1dbc-48bf-8381-34275fcd9a6f",
					},
				],
			},
		],
	};
	return (
		<div>
			<div className="">
				<div className="mb-5 w-72 justify-between flex">
					<span>Choose team:</span>
					<select
						value={teamName}
						className="border-2 rounded-lg
                                    pl-1 pr-1 cursor-pointer"
						name="teamName"
						id="teamName"
						required
					>
						{user?.teams?.map((team, index) => (
							<option value={team.teamName} key={index}>
								{team.teamName}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className="">{board && <TeamBoard data={board} />}</div>
		</div>
	);
};

export default ProjectBoard;
