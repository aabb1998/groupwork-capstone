import React, { useState } from "react";
import RatingBoard from "./RatingBoard";
import { useSelector, useDispatch } from "react-redux";
import { update, selectUser, updateFromApi } from "../../../redux/user";
import { store } from "../../../redux/configureStore";
import { useEffect } from "react";
import axios from "axios";

const DashboardRightMenu = () => {
	const { user } = useSelector(selectUser);

	const [commRating, setCommRating] = useState(0);
	const [collRating, setCollRating] = useState(0);
	const [funcRating, setFuncRating] = useState(0);

	useEffect(() => {
		fetchData();
	}, [user]);

	const fetchData = async () => {
		const data = await axios.get(
			`http://localhost:3000/api/getUsersRatings/${user.email}`
		);
		let newData = data.data.data.flat();

		let collaborationTotal = 0;
		let collaborationCount = 0;
		let communicationTotal = 0;
		let communicationCount = 0;
		let functionalityTotal = 0;
		let functionalityCount = 0;

		newData.map((outerElement, index) =>
			outerElement.ratings.map(
				(innerElement, key) =>
					(collaborationTotal += innerElement.collaborationRating),
				collaborationCount++
			)
		);

		newData.map((outerElement, index) =>
			outerElement.ratings.map(
				(innerElement, key) =>
					(communicationTotal += innerElement.communicationRating),
				communicationCount++
			)
		);

		newData.map((outerElement, index) =>
			outerElement.ratings.map(
				(innerElement, key) =>
					(functionalityTotal += innerElement.functionalityRating),
				functionalityCount++
			)
		);

		setCommRating(communicationTotal / communicationCount);
		setCollRating(collaborationTotal / collaborationCount);
		setFuncRating(functionalityTotal / functionalityCount);
	};

	const ratingBoard = {
		padding: "10px",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		height: "150px",
		borderRadius: "10px",
	};

	return (
		<div className=" w-100 min-h-screen min-w-max pr-5 mt-10">
			<div className="font-bold text-lg">User Summary</div>
			<RatingBoard
				total={commRating}
				rating="Communication"
				color="#BFEBFF"
			/>
			<RatingBoard
				total={collRating}
				rating="Collaboration"
				color="#F3E8FF"
			/>
			<RatingBoard
				total={funcRating}
				rating="Functionality"
				color="#DCFCE7"
			/>
		</div>
	);
};

export default DashboardRightMenu;
