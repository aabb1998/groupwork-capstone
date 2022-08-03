const router = require('express').Router();
const { Team, validate } = require('../models/team');
const { User } = require('../models/user');

router.post('/:teamCode', async (req, res) => {
  try {
    const team = await Team.findOne({ teamCode: req.params.teamCode });
    if (!team) {
      return res.status(401).send({ message: 'No team exists with code.' });
    }

    // search if user alread exists
    let userToFind = team.members.find((o) => o._id === req.body._id);
    console.log(userToFind);

    if (!userToFind) {
      const updateTeam = team.updateOne(
        { $push: { members: req.body } },
        function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log(success);
          }
        }
      );
      res.status.send(200).send({ message: 'Team joined successfuly.' });
    } else {
      res.status(401).send({ message: 'You have already joined the group.' });
    }
  } catch (error) {}
});

module.exports = router;
