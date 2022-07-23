const router = require('express').Router();
const Joi = require('joi');
const { User, validate } = require('../models/user');
const bcrypt = require('bcrypt');
const { json } = require('express');

router.get('/:some_id', async (req, res) => {
  const userName = req.params.some_id;
  try {
    console.log(req.params.some_id);

    const user = await User.findOne({ email: req.params.some_id });

    if (!user)
      return res.status(401).send({ message: 'User with email not found' });

    res.status(200).send({ data: user });
  } catch (error) {
    res.status(400).send({ message: 'Error. Failed to find.' });
  }
});

module.exports = router;
