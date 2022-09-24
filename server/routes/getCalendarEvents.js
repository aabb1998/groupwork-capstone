const { Calendar } = require('../models/calendar');
const router = require('express').Router();

router.get('/:teamCode', async (req, res) => {
  try {
    const calendarEvent = await Calendar.findOne({
      teamCode: req.params.teamCode,
    });
    if (!calendarEvent) {
      return res.status(401).send({
        message:
          'No team calendar exists for this team. Created a new calendar and added event.',
      });
    } else {
      return res.status(200).send({
        message: 'Team calendar event found',
        data: calendarEvent.events,
      });
    }
  } catch (error) {}
});

module.exports = router;
