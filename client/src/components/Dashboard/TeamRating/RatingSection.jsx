import React from "react";

const RatingSection = () => {
	return (
		<div className="">
			<div className="flex flex-row justify-between mt-4 text-center align-middle items-center p-4">
				<div className="w-20">Needs Development</div>
				<hr style={{ border: "1px solid black", width: "50%" }} />
				<div className="w-20">Consistently meets expectations</div>
				<hr style={{ border: "1px solid black", width: "50%" }} />

				<div className="w-20">Often exceeds Expectations</div>
				<hr style={{ border: "1px solid black", width: "50%" }} />

				<div className="w-20">Always exceeds expectations</div>
				<hr style={{ border: "1px solid black", width: "50%" }} />

				<div className="w-20">Sets a new standard</div>
			</div>
			<div className="rating-questions p-4">
				Rate this user for this Sprint:
			</div>
		</div>
	);
};

export default RatingSection;
