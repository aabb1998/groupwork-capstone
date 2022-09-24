const router = require('express').Router();
const { Features } = require('../models/Features');

router.post('/:teamCode', async (req, res) => {
  try {
    const teamFeatures = await Features.findOne({
      teamCode: req.params.teamCode,
    });
    if (!teamFeatures) {
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
      return res.status(401).send({
        message:
          'No team features exists for this team. Created a new feature list and added feature.',
      });
    }
  } catch (error) {}
});

module.exports = router;
