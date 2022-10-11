const mongoose = require("mongoose");

const ratingsSchema = new mongoose.Schema({
	featureId: { type: Number, required: true },
	description: { type: String, required: true },
	ratings: { type: Object, default: [] },
	title: { type: String, required: true },
	teamCode: { type: String, required: true },
	userCreator: { type: String, required: true },
});

const Ratings = mongoose.model("ratings", ratingsSchema);

module.exports = { Ratings };
