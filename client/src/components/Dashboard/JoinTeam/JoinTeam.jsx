import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../../redux/configureStore";
import { selectUser, update } from "./../../../redux/user";
import axios from "axios";
import { AiOutlinePlusCircle } from "react-icons/ai";

const JoinTeam = () => {
	const [teamCode, setTeamCode] = useState("");
	const [showModal, setShowModal] = useState(false);

	const { user } = useSelector(selectUser);
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		setTeamCode("");
		e.preventDefault();
		console.log(teamCode);
		try {
			const response = await axios.post(
				`http://localhost:3000/api/jointeam/${teamCode}`,
				user
			);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
		console.log("Submitted");
	};

	const handleChange = (event) => {
		setTeamCode(event.target.value);
	};

	const resetValues = () => {
		setTeamCode("");
	};
	return (
		<div className="">
			<div className="flex" onClick={() => setShowModal(!showModal)}>
				<button className="text-sm text-white bg-lightgray p-2 rounded-lg flex flex-row text-center items-center mr-4">
					<AiOutlinePlusCircle style={{ marginRight: "10" }} />
					Join Team
				</button>
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
										Join Team
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
										like to join.
									</p>
								</div>
								<div className="relative p-6 flex-auto">
									<div className="mb-5 w-72 justify-between flex">
										<span>Team Code:</span>
										<input
											style={{
												outline: "1px solid black",
												padding: "0px 3px",
												borderRadius: "7px",
												width: "170px",
												fontSize: "10px",
											}}
											type="text"
											placeholder="Team Code"
											value={teamCode}
											required
											name="teamCode"
											onChange={handleChange}
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
										Join Team
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

export default JoinTeam;
