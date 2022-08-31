import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, update } from "../../../redux/user";
import Team from "./Team";
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Teams = () => {
	const [showModal, setShowModal] = useState(false);
	const { user } = useSelector(selectUser);

	const [teamData, setTeamData] = useState({
		teamName: "",
		dateCreated: new Date().toISOString(),
		projectName: "",
		members: [],
		teamCode: "",
		sprints: 0,
	});

	useEffect(() => {
		if (!teamData.members.find((lookup) => lookup.email === user.email)) {
			setTeamData({ members: [...teamData.members.concat(user)] });
		}
		console.log(user);
		if (!user._id) {
			navigate("/homepage");
		}
	}, [user]);

	const handleChange = ({ currentTarget: input }) => {
		setTeamData({ ...teamData, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const code = generateCode();
		teamData.teamCode = code;
		console.log(teamData);
		try {
			const response = await axios.post(
				"http://localhost:3000/api/addteam",
				teamData
			);
			console.log("Team created.");
			console.log(response);
			resetValues();
			// updateUser();
		} catch (error) {
			console.log(error);
			resetValues();
		}
	};

	const resetValues = () => {
		setTeamData({
			teamName: "",
			dateCreated: new Date().toISOString(),
			projectName: "",
			members: [...teamData.members],
			teamCode: "",
			sprints: 0,
		});
	};

	const generateCode = () => {
		var result = [];
		var characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var charactersLength = characters.length;
		for (var i = 0; i < 5; i++) {
			result.push(
				characters.charAt(Math.floor(Math.random() * charactersLength))
			);
		}
		return result.join("");
	};

	return (
		<div className="w-">
			<div className="teams-header">
				<h4>Your teams</h4>
			</div>
			<div className="teams">
				{user ? (
					user.teams.map((team, index) => (
						<Team team={team} key={index} />
					))
				) : (
					<h4>Please login.</h4>
				)}
			</div>
			<div className="w-full flex justify-end">
				<div className="flex ">
					<button
						className="text-sm text-white bg-lightBlue p-2 rounded-lg flex flex-row text-center items-center"
						onClick={() => setShowModal(true)}
					>
						<AiOutlinePlusCircle style={{ marginRight: "10" }} />
						Join Team
					</button>
				</div>
			</div>
			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">
										Create a team
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
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<p className=" text-slate-500 text-lg leading-relaxed">
										Enter the details of the team you would
										like to create.
									</p>
								</div>
								<div className="relative p-6 flex-auto">
									<div className="mb-5 w-72 justify-between flex">
										<span>Team Name:</span>
										<input
											style={{
												outline: "1px solid black",
												padding: "0px 3px",
												borderRadius: "7px",
												width: "170px",
												fontSize: "10px",
											}}
											type="text"
											placeholder="Team Name"
											value={teamData.teamName}
											required
											name="teamName"
											onChange={handleChange}
										/>
									</div>
									<div className="mb-5 w-72 justify-between flex">
										<span>Project Name:</span>
										<input
											style={{
												outline: "1px solid black",
												padding: "0px 3px",
												borderRadius: "7px",
												width: "170px",
												fontSize: "10px",
											}}
											onChange={handleChange}
											required
											value={teamData.projectName}
											type="text"
											placeholder="Project Name"
											name="projectName"
										/>
									</div>
									<div className="mb-5 w-72 justify-between flex">
										<span>Sprints:</span>
										<input
											style={{
												outline: "1px solid black",
												padding: "0px 3px",
												borderRadius: "7px",
												width: "170px",
												fontSize: "10px",
											}}
											type="number"
											required
											onChange={handleChange}
											value={teamData.sprints}
											placeholder="Sprints"
											name="sprints"
										/>
									</div>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={handleSubmit}
									>
										Create Team
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</div>
	);
};

export default Teams;
