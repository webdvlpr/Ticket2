const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  device: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  os: {
    type: String,
    required: true
  },
  os_version: {
    type: String,
    // required: true,
  },
  browser: {
    type: String,
    required: true,
  },
  browser_version: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Ticket = mongoose.model("tickets", TicketSchema);
module.exports = Ticket;
