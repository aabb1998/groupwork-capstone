const Joi = require('joi');
const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  dateCreated: { type: Date, required: false },
  projectName: { type: String, required: true },
  members: { type: Array, default: [] },
});

const Team = mongoose.model('team', teamSchema);

// const validate = (data) => {
//   const schema = Joi.object({
//     teamName: Joi.string().required().label('Team Name'),
//     dateCreated: Joi.date().required().label('Date Created'),
//     projectName: Joi.string().required().label('Project name'),
//     members: Joi.array().items(Joi.string()),
//   });
// };

module.exports = { Team };
