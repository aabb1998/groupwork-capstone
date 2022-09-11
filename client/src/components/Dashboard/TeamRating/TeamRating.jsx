import React, { useState } from "react";
import { useEffect } from "react";
import { AiFillLock } from "react-icons/ai";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import MemberRating from "./MemberRating";

const TeamRating = ({ team, user }) => {
	const [lock, setLock] = useState(false);

	useEffect(() => {
		console.log(team);
	}, [team]);

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
					team.members.map((member, index) => (
						<MemberRating member={member} />
					))}
			</div>
		</div>
	);
};

export default TeamRating;
