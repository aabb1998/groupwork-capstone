const { Features } = require('../models/features');
const router = require('express').Router();

router.get('/:teamCode', async (req, res) => {
  console.log(req.params.teamCode);
  try {
    const teamFeature = await Features.findOne({
      teamCode: req.params.teamCode,
    });
    if (!teamFeature) {
      return res.status.send({
        message: 'No features found for this team.',
      });
    } else {
      return res.status(200).send({
        message: 'Team features found',
        data: teamFeature.features,
      });
    }
  } catch (error) {}
});

module.exports = router;
