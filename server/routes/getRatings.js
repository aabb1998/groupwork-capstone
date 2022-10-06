const router = require('express').Router();
const { Ratings } = require('../models/ratings');

router.get('/:teamCode', async (req, res) => {
  try {
    const ratings = await Ratings.find({ teamCode: req.params.teamCode });
    if (ratings) {
      return res.status(200).send({
        message: 'Feature ratings found.',
        data: ratings,
      });
    } else {
      return res.status(400).send({
        message: 'No feature ratings found for this team.',
      });
    }
  } catch (error) {
    return res.status(200).send({
      message: error,
    });
  }
});

module.exports = router;
