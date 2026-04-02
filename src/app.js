const express = require("express");
const app = express();

app.use(express.json());

app.use("/events", require("./routes/event.routes"));
app.use("/registrations", require("./routes/registration.routes"));

module.exports = app;