require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const findUserRoutes = require("./routes/findUserRoutes");
const addTeamRoute = require("./routes/team");

const getUpdatedUser = require("./routes/getUpdatedUser");
const joinTeam = require("./routes/JoinTeam");
const addCalendarEvent = require("./routes/addCalendarEvent");
const getCalendarEvents = require("./routes/getCalendarEvents");
const getFeature = require("./routes/getFeature");
const addRating = require("./routes/addRating");
const addFeature = require("./routes/addFeature");
const getRating = require("./routes/getRatings");

const getUsersRatings = require("./routes/getUsersRatings");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/findUser", findUserRoutes);
app.use("/api/addTeam", addTeamRoute);
app.use("/api/getupdatedUser", getUpdatedUser);
app.use("/api/jointeam", joinTeam);
app.use("/api/addCalendarEvent", addCalendarEvent);
app.use("/api/getCalendarEvents", getCalendarEvents);
app.use("/api/getFeatures", getFeature);
app.use("/api/addRating", addRating);
app.use("/api/addFeature", addFeature);
app.use("/api/getRatings", getRating);
app.use("/api/getUsersRatings", getUsersRatings);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
