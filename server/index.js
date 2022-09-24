require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const findUserRoutes = require('./routes/findUserRoutes');
const addTeamRoute = require('./routes/team');
const getUpdatedUser = require('./routes/getUpdatedUser');
const joinTeam = require('./routes/JoinTeam');
const addCalendarEvent = require('./routes/addCalendarEvent');
const getCalendarEvents = require('./routes/getCalendarEvents');
const addFeatures = require('./routes/addFeatures');
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/findUser', findUserRoutes);
app.use('/api/addTeam', addTeamRoute);
app.use('/api/getupdatedUser', getUpdatedUser);
app.use('/api/jointeam', joinTeam);
app.use('/api/addCalendarEvent', addCalendarEvent);
app.use('/api/getCalendarEvents', getCalendarEvents);
app.use('/api/addFeatures', addFeatures);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
