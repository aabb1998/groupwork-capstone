const router = require('express').Router();
const { Team, validate } = require('../models/team');

router.post('/', async (req, res) => {
  try {
    console.log(req.body);

    const team = await Team.findOne({ teamName: req.body.teamName });
    if (team)
      return res.status(409).send({ message: 'Team name already exists.' });
    console.log(team);
    await new Team({ ...req.body }).save();
    res.status(201).send({ message: 'Team has been created.' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal server error.' });
  }
});

module.exports = router;
