const Joi = require("joi");
const mongoose = require("mongoose");
const randomString = require("randomstring");

const teamSchema = new mongoose.Schema({
	teamName: { type: String, required: true },
	dateCreated: { type: Date, required: true },
	projectName: { type: String, required: true },
	members: { type: Array, default: [] },
	teamCode: { type: String, required: true },
	sprints: { type: Number, required: true },
	endDate: { type: Date, required: true },
});

const Team = mongoose.model("team", teamSchema);

module.exports = { Team };
