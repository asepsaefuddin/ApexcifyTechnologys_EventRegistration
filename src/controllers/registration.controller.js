const Registration = require("../models/registration.model");
const Event = require("../models/event.model");

// GET all registrations
exports.getRegistrations = async (req, res) => {
  const data = await Registration.find().populate("event");

  res.json({
    message: "All registrations",
    data
  });
};

// GET registrations by user
exports.getUserRegistrations = async (req, res) => {
  const user = req.params.user;

  const data = await Registration.find({ user }).populate("event");

  res.json({
    message: `Registrations for ${user}`,
    data
  });
};

// REGISTER to event
exports.registerEvent = async (req, res) => {
  const { user, eventId } = req.body;

  if (!user || !eventId) {
    return res.status(400).json({
      message: "user and eventId required"
    });
  }

  // cek event
  const event = await Event.findById(eventId);
  if (!event) {
    return res.status(404).json({
      message: "Event not found"
    });
  }

  // cegah double register
  const existing = await Registration.findOne({
    user,
    event: eventId
  });

  if (existing) {
    return res.status(400).json({
      message: "Already registered"
    });
  }

  const reg = await Registration.create({
    user,
    event: eventId
  });

  res.status(201).json({
    message: "Registered successfully",
    data: reg
  });
};

// CANCEL registration
exports.cancelRegistration = async (req, res) => {
  const id = req.params.id;

  const deleted = await Registration.findByIdAndDelete(id);

  if (!deleted) {
    return res.status(404).json({
      message: "Registration not found"
    });
  }

  res.json({
    message: "Registration cancelled"
  });
};