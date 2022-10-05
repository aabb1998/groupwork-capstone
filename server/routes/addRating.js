const router = require('express').Router();
const { Ratings } = require('../models/ratings');

router.put('/:teamCode/addrating/:featureId', async (req, res) => {
  console.log(req.body);
  try {
    const teamRating = await Ratings.findOneAndUpdate(
      {
        featureId: req.params.featureId,
      },
      { $push: { ratings: req.body.ratings } }
    );
    if (teamRating) {
      console.log(teamRating);

      return res.status(200).send({
        message: 'Team already exists.',
        data: teamRating,
      });
    } else {
      await new Ratings({
        featureId: req.body.featureId,
        description: req.body.description,
        ratings: req.body.ratings[0],
        title: req.body.title,
        teamCode: req.body.teamCode,
        userCreator: req.body.userCreator,
      }).save();
      console.log('team rating not found');
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
