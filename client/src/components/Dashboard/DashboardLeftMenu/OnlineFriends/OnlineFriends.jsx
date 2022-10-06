import React from "react";
import { BsFillChatLeftDotsFill } from "../../../../../node_modules/react-icons/bs";

const OnlineFriends = () => {
	return (
		<div
			style={{
				background: "#FFFFFF",
				boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
				borderRadius: "11px",
				padding: "10px",
				marginBottom: "10px",
			}}
		>
			<div
				className="friend"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					marginBottom: "10px",
				}}
			>
				<img
					src="https://media-exp1.licdn.com/dms/image/C5603AQHYMksxMSwo1A/profile-displayphoto-shrink_100_100/0/1517410364685?e=1670457600&v=beta&t=ztH8Ieq4rnVe-yzLpx8BmNCBdHxCeP-nQOi3e2smzl0"
					alt=""
					style={{
						width: "30px",
						borderRadius: "30px",
						border: "2px solid #4D626C",
					}}
				/>
				<span
					style={{
						fontSize: "10px",
						fontWeight: "bold",
					}}
				>
					Peter Taylor
				</span>
				<BsFillChatLeftDotsFill
					style={{
						cursor: "pointer",
					}}
					color="#4ADE80"
				/>
			</div>
			<div
				className="friend"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					marginBottom: "10px",
				}}
			>
				<img
					src="https://media-exp1.licdn.com/dms/image/C5603AQGukn9_HRrO0Q/profile-displayphoto-shrink_100_100/0/1660407471523?e=1670457600&v=beta&t=7K_rcdhduaHyogH40Kan1uKu8xhpbIa9RfrpH73Wy8k"
					alt=""
					style={{
						width: "30px",
						borderRadius: "30px",
						border: "2px solid #4D626C",
					}}
				/>
				<span
					style={{
						fontSize: "10px",
						fontWeight: "bold",
					}}
				>
					HeNam Pang
				</span>
				<BsFillChatLeftDotsFill
					style={{
						cursor: "pointer",
					}}
					color="#4ADE80"
				/>
			</div>
			<div
				className="friend"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					marginBottom: "10px",
				}}
			>
				<img
					src="https://media-exp1.licdn.com/dms/image/C4E03AQHz2lhAUz3UPg/profile-displayphoto-shrink_200_200/0/1517655416231?e=1670457600&v=beta&t=2n21iZjuLXCPZcawrzyJI90QodfS7iZmGppCiscwDf8"
					alt=""
					style={{
						width: "30px",
						borderRadius: "30px",
						border: "2px solid #4D626C",
					}}
				/>
				<span
					style={{
						fontSize: "10px",
						fontWeight: "bold",
					}}
				>
					Shelley Reys
				</span>
				<BsFillChatLeftDotsFill
					style={{
						cursor: "pointer",
					}}
					color="#4ADE80"
				/>
			</div>
			<div
				className="friend"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					marginBottom: "10px",
				}}
			>
				<img
					src="https://media-exp1.licdn.com/dms/image/C5603AQGw-Iw6q-_WRg/profile-displayphoto-shrink_200_200/0/1654615587186?e=1670457600&v=beta&t=h0kQHiHLmmVCOgekMIDP8v0g4zGLDsNWuZTVTU3mAJg"
					alt=""
					style={{
						width: "30px",
						borderRadius: "30px",
						border: "2px solid #4D626C",
					}}
				/>
				<span
					style={{
						fontSize: "10px",
						fontWeight: "bold",
					}}
				>
					Lucas Zaylor
				</span>
				<BsFillChatLeftDotsFill
					style={{
						cursor: "pointer",
					}}
					color="#4ADE80"
				/>
			</div>
			<div
				className="friend"
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					marginBottom: "10px",
				}}
			>
				<img
					src="https://media-exp1.licdn.com/dms/image/C5103AQHcmnpwX37ppg/profile-displayphoto-shrink_200_200/0/1535628659967?e=1670457600&v=beta&t=G-mZLnG7K8iBRrVG-2m1UQ8-zNMbk7jh8JwYwh4JrSU"
					alt=""
					style={{
						width: "30px",
						borderRadius: "30px",
						border: "2px solid #4D626C",
					}}
				/>
				<span
					style={{
						fontSize: "10px",
						fontWeight: "bold",
					}}
				>
					Aman Gupta
				</span>
				<BsFillChatLeftDotsFill
					style={{
						cursor: "pointer",
					}}
					color="#4ADE80"
				/>
			</div>
		</div>
	);
};

export default OnlineFriends;
