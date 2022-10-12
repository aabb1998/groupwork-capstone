const router = require("express").Router();
const { Ratings } = require("../models/ratings");

router.get("/:user_email", async (req, res) => {
	try {
		const ratings = await Ratings.find({
			userCreatore: req.params.user_email,
		});
		console.log(ratings);

		if (ratings) {
			return res.status(200).send({
				message: "Ratings for user have been found",
				data: ratings,
			});
		} else {
			return res.status(400).send({
				message: "Ratings for user have not been found",
			});
		}
	} catch (error) {
		return error;
	}
});

module.exports = router;
