import React, { useEffect } from "react";
import { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import RatingSection from "./RatingSection";

const FeatureRating = ({ features }) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		console.log(features);
	}, [features]);

	return (
		<div className="bg-white m-4 rounded-md p-1 ">
			<div className="flex align-middle flex-row justify-between">
				{features &&
					features.map((feature, index) => (
						<span>{feature.title}</span>
					))}
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

export default FeatureRating;
