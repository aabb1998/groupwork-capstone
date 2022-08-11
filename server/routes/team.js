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

    console.log(req.body.members);
    // const user = await User.findOne({ email: req.body.email });
    //     if (user) {
    //       const updateUser = user.updateOne(
    //         { $push: { teams: team } },
    //         function (error, success) {
    //           if (error) {
    //             console.log(error);
    //           } else {
    //             console.log(success);
    //           }
    //         }
    //       );
    //     }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal server error.' });
  }
});

module.exports = router;
