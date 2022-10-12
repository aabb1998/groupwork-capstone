import React, { useEffect } from "react";
import { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import RatingSection from "./RatingSection";

const FeatureRating = ({ feature, teamCode }) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		// console.log(feature);
	}, [feature]);

	return (
		<div className="bg-white m-4 rounded-md p-1 ">
			<div className="flex align-middle flex-row justify-between">
				<span>{feature.title}</span>
				<div className="items-center flex">
					<BsFillArrowRightSquareFill
						onClick={() => setOpen(!open)}
						style={{ cursor: "pointer" }}
					/>
				</div>
			</div>
			{open && (
				<div className="">
					{feature ? (
						<RatingSection
							feature={feature}
							featureName={feature.title}
							teamCode={teamCode}
						/>
					) : (
						<span>You have no feature to rate for this team.</span>
					)}
				</div>
			)}
		</div>
	);
};

export default FeatureRating;
