const Event = require("../models/event.model");

// GET all events
exports.getEvents = async (req, res) => {
  const events = await Event.find().sort({ date: 1 });

  res.json({
    message: "List of events",
    data: events
  });
};

// GET detail event
exports.getEventById = async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.json({
    message: "Event detail",
    data: event
  });
};

// CREATE event
exports.createEvent = async (req, res) => {
  const { title, date, description } = req.body;

  if (!title || !date || !description) {
    return res.status(400).json({
      message: "All fields required"
    });
  }

  const newEvent = await Event.create({
    title,
    date,
    description
  });

  res.status(201).json({
    message: "Event created",
    data: newEvent
  });
};