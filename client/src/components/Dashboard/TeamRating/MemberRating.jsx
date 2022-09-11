import React from "react";
import { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import RatingSection from "./RatingSection";

const MemberRating = ({ member }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className="bg-white m-4 rounded-md p-1 ">
			<div className="flex align-middle flex-row justify-between">
				<div className=""> Rate {member.firstName}</div>
				<div className="items-center flex">
					<BsFillArrowRightSquareFill
						onClick={() => setOpen(!open)}
						style={{ cursor: "pointer" }}
					/>
				</div>
			</div>
			{open && (
				<div className="">
					<RatingSection />
				</div>
			)}
		</div>
	);
};

export default MemberRating;
