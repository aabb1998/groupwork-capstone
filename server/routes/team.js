const router = require("express").Router();
const { Team, validate } = require("../models/team");
const { User } = require("../models/user");

router.post("/", async (req, res) => {
	try {
		const team = await Team.findOne({ teamName: req.body.teamName });
		if (team) {
			return res
				.status(409)
				.send({ message: "Team name already exists." });
		}
		await new Team({ ...req.body }).save();
		res.status(201).send({
			message: "Team has been created. Attempting to add team to user.",
		});

		const user = await User.findOne({ email: req.body.members[0].email });
		if (user) {
			console.log("User found");
			const updateUser = user.updateOne(
				{ $push: { teams: team } },
				function (error, success) {
					if (error) {
						console.log(error);
					} else {
						console.log(team);
					}
				}
			);
		} else {
			console.log("User not found");
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal server error." });
	}
});

module.exports = router;
