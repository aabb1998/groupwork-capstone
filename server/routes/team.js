const router = require('express').Router();
const { Team, validate } = require('../models/team');
const { User } = require('../models/user');

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const team = await Team.findOne({ teamName: req.body.teamName });
    if (team) {
      return res.status(409).send({ message: 'Team name already exists.' });
    }
    await new Team({ ...req.body }).save();
    res.status(201).send({
      message: 'Team has been created. Attempting to add team to user.',
    });
    const user = User.findByIdAndUpdate(
      req.body,
      { $push: { teams: req.body.teamName } },
      { safe: true, upsert: true },
      function (err, doc) {
        if (err) {
        } else {
          console.log('User has been added');
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal server error.' });
  }
});

module.exports = router;
