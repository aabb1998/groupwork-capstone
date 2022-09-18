const router = require("express").Router();
const { Calendar } = require("../models/calendar");

router.post("/:teamCode", async (req, res) => {
	try {
		const teamCalendar = await Calendar.findOne({
			teamCode: req.params.teamCode,
		});
		if (!teamCalendar) {
			return res
				.status(401)
				.send({
					message:
						"No team calendar exists for this team. Created a new calendar and added event.",
				});
		}

		console.log(teamCalendar);
		const addEvent = teamCalendar.updateOne(
			{ $push: { events: req.body } },
			function (error, success) {
				if (error) {
					console.log(error);
				} else {
					console.log(success);
				}
			}
		);
		if (teamCalendar) addEvent();
		return res.status(201).send({ message: "Event has been added." });
	} catch {}
});

module.exports = router;
