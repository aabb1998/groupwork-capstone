const router = require("express").Router();
const { Features } = require("../models/Features");

router.post("/:teamCode", async (req, res) => {
	try {
		const teamFeatures = await Features.findOne({
			teamCode: req.params.teamCode,
		});
		if (!teamFeatures) {
			await new Features({
				teamCode: req.params.teamCode,
				features: [
					{
						id: 1,
						title: "Backlog",
						cards: [
							{
								id: 1,
								title: "Add card",
								description:
									"Add capability to add a card in a column",
							},
							{
								id: 0,
								title: "Prosure",
								description:
									"e1484100-c07f-4780-a170-cfab1965e3bd",
							},
							{
								id: 1,
								title: "Vortexaco",
								description:
									"24a8bdb0-433f-4274-ad2f-e0387e4807c4",
							},
							{
								id: 2,
								title: "Polarax",
								description:
									"a2c92c2c-4529-4f0e-8480-2a88247b39b3",
							},
						],
					},
					{
						id: 2,
						title: "In Progress",
						cards: [
							{
								id: 2,
								title: "Drag-n-drop support",
								description: "Move a card between the columns",
							},
							{
								id: 0,
								title: "Bristo",
								description:
									"780ca2a6-5354-43ed-9a69-6e8bface5db5",
							},
							{
								id: 1,
								title: "Liquidoc",
								description:
									"f8fdbdcf-fbd7-453d-909a-47b6bd69ff3c",
							},
							{
								id: 2,
								title: "Cofine",
								description:
									"adb3b0df-2260-4904-9e5b-7aada2551fa5",
							},
						],
					},
					{
						id: 3,
						title: "Completed",
						cards: [
							{
								id: 42,
								title: "Drag-n-drop support",
								description: "Move a card between the columns",
							},
							{
								id: 0,
								title: "Earwax",
								description:
									"56ee43ab-9f44-448c-8740-3af174668d2d",
							},
							{
								id: 1,
								title: "Evidends",
								description:
									"949b3f66-ec51-450a-8426-c29d3c5340f5",
							},
							{
								id: 2,
								title: "Tersanki",
								description:
									"6267a26a-1dbc-48bf-8381-34275fcd9a6f",
							},
						],
					},
				],
			}).save();
			return res.status(401).send({
				message:
					"No team features exists for this team. Created a new feature list and added feature.",
			});
		}
	} catch (error) {}
});

module.exports = router;
