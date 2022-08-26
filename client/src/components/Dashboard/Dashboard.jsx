import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./../../redux/configureStore";
import { update, selectUser, updateFromApi } from "../../redux/user";
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar";
import JoinTeam from "./JoinTeam/JoinTeam";
import DashboardLeftMenu from "./DashboardLeftMenu/DashboardLeftMenu";
import { selectDashboard, updateDashboard } from "../../redux/counter";
import MainPage from "./DashboardSections/MainPage";
import TeamCalendar from "./DashboardSections/TeamCalendar";
import Teams from "./DashboardSections/Teams";
import Ratings from "./DashboardSections/Ratings";
import Tasks from "./DashboardSections/Tasks";
import DashboardRightMenu from "./DashboardRightMenu/DashboardRightMenu";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const navigate = useNavigate();
	const [teamData, setTeamData] = useState({
		teamName: "",
		dateCreated: new Date().toISOString(),
		projectName: "",
		members: [],
		teamCode: "",
	});
	const [newUserData, setNewUserData] = useState();

	const { user } = useSelector(selectUser);
	const userDashboard = useSelector(selectDashboard);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log(userDashboard);
	}, [userDashboard]);

	const generateCode = () => {
		var result = [];
		var characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var charactersLength = characters.length;
		for (var i = 0; i < 5; i++) {
			result.push(
				characters.charAt(Math.floor(Math.random() * charactersLength))
			);
		}
		return result.join("");
	};

	useEffect(() => {
		if (!teamData.members.find((lookup) => lookup.email === user.email)) {
			setTeamData({ members: [...teamData.members.concat(user)] });
		}
		console.log(user);
		if (!user._id) {
			navigate("/homepage");
		}
	}, [user]);

	const handleChange = ({ currentTarget: input }) => {
		setTeamData({ ...teamData, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const code = generateCode();
		teamData.teamCode = code;
		try {
			const response = await axios.post(
				"http://localhost:3000/api/addteam",
				teamData
			);
			console.log("Team created.");
			console.log(response);
			resetValues();
			// updateUser();
		} catch (error) {
			console.log(error.response.data.message);
			resetValues();
		}
	};

	// const updateUser = async () => {
	//   try {
	//     const response = await axios.get(
	//       `http://localhost:3000/api/findUser/${user.email}`
	//     );
	//     console.log(response);
	//     dispatch(update(response.data));
	//   } catch (error) {
	//     console.log(error);
	//   }
	// };

	const resetValues = () => {
		setTeamData({
			teamName: "",
			dateCreated: new Date().toISOString(),
			projectName: "",
			members: [...teamData.members],
			teamCode: "",
		});
	};

	return (
		<div className="">
			<div>
				<DashboardNavbar />
			</div>
			<div className="flex flex-row ">
				<div className="flex flex-col w-96 h-screen px-20 bg-lightBlue rounded-r-2xl">
					<DashboardLeftMenu />
				</div>
				<div className="w-full ml-10 mr-10">
					{userDashboard.counter === 0 && <MainPage />}
					{userDashboard.counter === 1 && <Teams />}
					{userDashboard.counter === 2 && <TeamCalendar />}
					{userDashboard.counter === 3 && <MainPage />}
					{userDashboard.counter === 4 && <Tasks />}
					{userDashboard.counter === 5 && <Ratings />}
				</div>
				<div className="flex flex-col w-96 h-screen px-20 rounded-l-2xl">
					<DashboardRightMenu />
				</div>
			</div>
			{/* <div className="team-modal">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <span>Team name:</span>
            <input
              onChange={handleChange}
              name="teamName"
              required
              placeholder="Team Name"
              value={teamData.teamName}
              type="text"
            />
            <span>Project name:</span>
            <input
              onChange={handleChange}
              name="projectName"
              required
              placeholder="Project Name"
              value={teamData.projectName}
              type="text"
            />
            <button onSubmit={handleSubmit} type="submit">
              Create Team
            </button>
          </form>
        </div>
      </div> */}
			{/* <JoinTeam /> */}
		</div>
	);
};

export default Dashboard;
