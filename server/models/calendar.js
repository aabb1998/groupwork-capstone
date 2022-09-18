const mongoose = require("mongoose");

const calendarSchema = new mongoose.Schema({
	teamCode: { type: String, required: true },
	events: { type: Array, default: [] },
	dateCreated: { type: Date, required: true },
	dateEnded: { type: Date, required: true },
});

const Calendar = mongoose.model("calendar", calendarSchema);

module.exports = { Calendar };
