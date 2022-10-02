const router = require('express').Router();
const { Features } = require('../models/features');

router.post('/:teamCode/features/:featureId', async (req, res) => {
  console.log(req.body);
  try {
    const teamFeature = await Features.findOne({
      teamCode: req.params.teamCode,
    });
    if (!teamFeature) {
      return res.status.send({
        message: 'No features found for this team.',
      });
    } else {
      const completedTasks = await teamFeature.features.find((x) => x.id === 3);
      let ratingFeature;
      if (completedTasks) {
        ratingFeature = completedTasks.cards.find(
          (y) => y.featureId === parseInt(req.params.featureId)
        );
        return res.status(200).send({
          message: 'Team features found',
          ratingFeature,
        });
      }
    }
  } catch (error) {}
});

module.exports = router;
