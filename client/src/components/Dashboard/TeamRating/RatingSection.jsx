import React, { useState, Component } from "react";
import InputNumber from "react-rating";
import ReactHover, { Trigger, Hover } from "react-hover";
import { selectUser } from "../../../redux/user";
import { useDispatch, useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const RatingSection = ({ feature, featureName, teamCode }) => {
	const [rated, setRated] = useState(false);
	const [num, setNum] = useState(2.2);
	const [completeness, setCompleteness] = useState(0);
	const [correctness, setCorrectness] = useState(0);
	const [involvement, setInvolvement] = useState(0);
	const [functionality, setFunctionality] = useState(0);
	const [communication, setCommunication] = useState(0);
	const [collaboration, setCollaboration] = useState(0);
	const [userFunction, setUserFunction] = useState(0);
	const [inputValue, setInputValue] = useState("");
	const [userFeedback, setUserFeedback] = useState("");

	const { user } = useSelector(selectUser);

	const optionsCursorTrueWithMargin = {
		followCursor: true,
		shiftX: 20,
		shiftY: 0,
	};

	const ratingLimit = () => {
		navigator.clipboard.writeText("You have already rated this feature.");
		const notify = () =>
			toast.warn("You have already rated this feature!", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		notify();
		setRated(true);
	};
	const handleRatingSubmit = async () => {
		if (feature?.ratings?.find((x) => x.email === user.email)) {
			console.log("You have already rated this feature!");
			ratingLimit();
		} else {
			feature.ratings.push({
				communicationRating: communication,
				collaborationRating: collaboration,
				functionalityRating: userFunction,
				featureRating:
					(completeness + correctness + involvement + functionality) /
					4,
				feedback: userFeedback,
				email: user.email,
			});

			const data = {
				communicationRating: communication,
				collaborationRating: collaboration,
				functionalityRating: userFunction,
				featureRating:
					(completeness + correctness + involvement + functionality) /
					4,
				feedback: userFeedback,
				userCreator: user.email,
				featureId: feature.featureId,
				description: feature.description,
				title: feature.title,
				teamCode: teamCode,
				ratings: feature.ratings,
			};

			const response = await axios.put(
				`http://localhost:3000/api/addrating/${teamCode}/addrating/${feature.featureId}`,
				data
			);
			setRated(true);
		}
	};

	const handleRatingRequest = async () => {
		let info;
		try {
			const response = await axios.get(
				`http://localhost:3000/api/getfeatures/${teamCode}`
			);
			let objectData = response.data.data[2].cards;
			info = objectData.find((item) => item.id === feature.id);
		} catch (error) {
			console.log(error);
		}
		return info;
	};

	return (
		<div className="">
			<div className="flex flex-row justify-between mt-4 text-center align-middle items-center"></div>
			<div className="text-center font-semibold">
				Rate this feature for the current Sprint:
			</div>
			<div className="feature-rating">
				<div className="flex flex-row justify-between p-5 mt-3">
					<div className="">
						<h4>Feature Completeness</h4>
					</div>
					<div className="flex">
						<span className="mr-5 font-bold" id="label-onrate">
							{completeness}
						</span>

						<InputNumber
							min={1}
							max={5}
							step={1}
							fractions={4}
							value={completeness}
							onChange={(e) => setCompleteness(e)}
						/>
					</div>
				</div>
				<div className="flex flex-row justify-between p-5 mt-3">
					<div className="">Feature correctness</div>
					<div className="flex">
						<span className="mr-5 font-bold" id="label-onrate1">
							{correctness}
						</span>

						<InputNumber
							min={1}
							max={5}
							step={1}
							fractions={4}
							value={correctness}
							onChange={(e) => setCorrectness(e)}
						/>
					</div>
				</div>
				<div className="flex flex-row justify-between p-5 mt-3">
					<div className="">Team involvement with feature</div>
					<div className="flex">
						<span className="mr-5 font-bold" id="label-">
							{involvement}
						</span>

						<InputNumber
							min={1}
							max={5}
							step={1}
							fractions={4}
							value={involvement}
							onChange={(e) => setInvolvement(e)}
						/>
					</div>
				</div>
				<div className="flex flex-row justify-between p-5 mt-3">
					<div className="">Feature functionality</div>
					<div className="flex">
						<span className="mr-5 font-bold" id="label-onrate3">
							{functionality}
						</span>

						<InputNumber
							min={0}
							max={5}
							step={1}
							fractions={4}
							value={functionality}
							onChange={(e) => setFunctionality(e)}
						/>
					</div>
				</div>
			</div>
			<div className="individual-rating">
				<div className="text-center font-semibold">
					Rate the feature completer:
				</div>
				<div className="flex flex-row justify-between p-5 mt-3">
					<div className="">Collaboration rating</div>
					<div className="flex">
						<span className="mr-5 font-bold" id="label-onrate3">
							{collaboration}
						</span>

						<InputNumber
							min={0}
							max={5}
							step={1}
							fractions={4}
							value={functionality}
							onChange={(e) => setCollaboration(e)}
						/>
					</div>
				</div>
				<div className="flex flex-row justify-between p-5 mt-3">
					<div className="">Communication rating</div>
					<div className="flex">
						<span className="mr-5 font-bold" id="label-onrate3">
							{communication}
						</span>

						<InputNumber
							min={0}
							max={5}
							step={1}
							fractions={4}
							value={functionality}
							onChange={(e) => setCommunication(e)}
						/>
					</div>
				</div>
				<div className="flex flex-row justify-between p-5 mt-3">
					<div className="">Functionality rating</div>
					<div className="flex">
						<span className="mr-5 font-bold" id="label-onrate3">
							{userFunction}
						</span>

						<InputNumber
							min={0}
							max={5}
							step={1}
							fractions={4}
							value={functionality}
							onChange={(e) => setUserFunction(e)}
						/>
					</div>
				</div>
				<div className="flex flex-row justify-between p-5 mt-3">
					<div className="">Feedback</div>
					<div className="flex">
						<input
							type="text"
							placeholder="Input feedback for team member"
							multiple
							style={{
								padding: "10px",
								fontSize: "10px",
								width: "400px",
								border: "2px solid black",
								borderRadius: "7px",
							}}
							onChange={(e) => setUserFeedback(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div className="flex text-center justify-center mt-5 mb-5">
				{!rated ? (
					<button
						onClick={handleRatingSubmit}
						className="text-sm p-3 pl-5 pr-5 bg-lightBlue text-white font-semibold rounded-lg"
					>
						Submit Rating for {featureName}
					</button>
				) : (
					<button
						onClick={handleRatingSubmit}
						className="cursor-not-allowed text-sm p-3 pl-5 pr-5 bg-slate-500 text-black font-semibold rounded-lg"
					>
						You have already rated {featureName}
					</button>
				)}
			</div>
			<ToastContainer />
		</div>
	);
};

export default RatingSection;
