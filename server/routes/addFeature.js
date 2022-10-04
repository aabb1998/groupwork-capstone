const { Features } = require('../models/features');
const router = require('express').Router();

router.post('/:teamCode', async (req, res) => {
  console.log(req.body);
  try {
    const teamFeature = await Features.findOne({
      teamCode: req.params.teamCode,
    });

    if (teamFeature) {
      await teamFeature.delete();
      console.log('Team found feature and deleted');
      await new Features({
        teamCode: req.params.teamCode,
        features: req.body.columns,
      }).save();
    } else {
      console.log('Feature not found');
      await new Features({
        teamCode: req.params.teamCode,
        features: [
          {
            id: 1,
            title: 'Backlog',
            cards: [],
          },
          {
            id: 2,
            title: 'In Progress',
            cards: [],
          },
          {
            id: 3,
            title: 'Completed',
            cards: [],
          },
        ],
      }).save();
    }
  } catch (error) {}
});

module.exports = router;
