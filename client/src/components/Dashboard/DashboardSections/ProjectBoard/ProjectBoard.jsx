import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../../../redux/user";
import Board, { moveCard } from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import TeamBoard from "./TeamBoard";
import axios from "axios";

const ProjectBoard = () => {
	const [featureData, setFeatureData] = useState({
		teamName: "",
	});
	const [teamcode, setTeamcode] = useState();
	const [boardData, setBoardData] = useState();

	const { user } = useSelector(selectUser);
	const [names, setName] = useState(["Software Project", "IT Tool Project"]);

	// const teamName = () => {
	// 	user.teams.map((team, index) => {
	// 		setName(...names, team.teamName);
	// 	});
	// };

	// useEffect(() => {
	// 	teamName();
	// }, [user]);

	const onChange = async (e) => {
		let result = user.teams.filter((x) => x.teamName === e.value);
		console.log(result[0].teamCode);
		try {
			const response = await axios.get(
				`http://localhost:3000/api/getfeatures/${result[0].teamCode}`
			);
			console.log("Fetching features.");
			let newData = {
				columns: response.data.data,
			};
			console.log(newData);
			setBoardData(newData);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		console.log(boardData);
	}, [boardData]);

	return (
		<div>
			<div className="">
				<Dropdown
					options={names}
					// value={defaultOption}
					onChange={onChange}
					placeholder="Select a team"
				/>
			</div>
			<div className="">
				{boardData && user && <TeamBoard data={boardData} />}
			</div>
		</div>
	);
};

export default ProjectBoard;
