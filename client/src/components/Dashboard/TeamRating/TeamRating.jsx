import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiFillLock } from "react-icons/ai";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import FeatureRating from "./FeatureRating";
import MemberRating from "./FeatureRating";

const TeamRating = ({ team, user }) => {
	const [lock, setLock] = useState(false);
	const [teamFeatures, setTeamFeatures] = useState();

	const getTeamFeatures = async () => {
		try {
			const response = await axios.get(
				`http://localhost:3000/api/getfeatures/${team.teamCode}`
			);
			setTeamFeatures(response.data.data[2]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getTeamFeatures();
	}, [team]);

	useEffect(() => {
		// console.log(teamFeatures);
		teamFeatures?.cards.map((team, index) => {
			// console.log(team);
		});
	}, [teamFeatures]);

	return (
		<div className="bg-zinc-400 m-10 p-4 ">
			<div className="flex flex-row align-middle text-center justify-between">
				<div className="">{team.teamName}</div>
				<div className="" onClick={() => setLock(!lock)}>
					{lock ? (
						<BsFillArrowUpSquareFill
							style={{ fontSize: "20px", cursor: "pointer" }}
						/>
					) : (
						<AiFillLock
							style={{ fontSize: "20px", cursor: "pointer" }}
						/>
					)}
				</div>
			</div>
			<div className="">
				{team &&
					lock &&
					teamFeatures?.cards.map(
						(feature, index) => (
							<FeatureRating
								teamCode={team.teamCode}
								key={index}
								feature={feature}
							/>
						)
						// console.log(feature)
					)}
			</div>
		</div>
	);
};

export default TeamRating;
