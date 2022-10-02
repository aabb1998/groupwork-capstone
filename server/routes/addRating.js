const router = require("express").Router();
const { Features } = require("../models/features");

router.post("/:teamCode/features/:featureId", async (req, res) => {
	try {
		const teamFeatures = await Features.findOne({
			teamCode: req.params.teamCode,
		});
		if (!teamFeatures) {
			console.log("No team feature found");
		} else {
			return res.status(200).send({
				message: "Team feature found",
				data: teamFeatures.features,
			});
		}
	} catch (error) {}
});

module.exports = router;
