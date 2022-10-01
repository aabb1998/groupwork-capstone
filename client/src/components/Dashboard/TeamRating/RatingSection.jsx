import React, { useState, Component } from "react";
import InputNumber from "react-rating";
import ReactHover, { Trigger, Hover } from "react-hover";

const RatingSection = ({ featureName }) => {
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

	const optionsCursorTrueWithMargin = {
		followCursor: true,
		shiftX: 20,
		shiftY: 0,
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
				<button className="text-sm p-3 pl-5 pr-5 bg-lightBlue text-white font-semibold rounded-lg">
					Submit Rating for {featureName}
				</button>
			</div>
		</div>
	);
};

export default RatingSection;
