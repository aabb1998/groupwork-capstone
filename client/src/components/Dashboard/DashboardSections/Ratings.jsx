import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, update } from "../../../redux/user";

const Ratings = () => {
	const { user } = useSelector(selectUser);

	return <div>Ratings</div>;
};

export default Ratings;
