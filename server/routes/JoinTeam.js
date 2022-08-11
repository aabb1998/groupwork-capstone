const router = require('express').Router();
const { Team, validate } = require('../models/team');
const { User } = require('../models/user');

router.post('/:teamCode', async (req, res) => {
  try {
    const team = await Team.findOne({ teamCode: req.params.teamCode });
    if (!team) {
      return res.status(401).send({ message: 'No team exists with code.' });
    }

    // search if user alread exists in the team, if not add to the team in collection
    let userToFind = team.members.find((o) => o._id === req.body._id);

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

    // Add the team details to the user
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const updateUser = user.updateOne(
        { $push: { teams: team } },
        function (error, success) {
          if (error) {
            console.log(error);
          } else {
            console.log(success);
          }
        }
      );
    }
  } catch (error) {}
});

module.exports = router;
