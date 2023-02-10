const express = require("express");
const ticketRouter = express.Router();

const {
  getAllTickets,
  addTicket,
  updateTicket,
  getTicket,
  deleteTicket,
  userTicket,
  getAllDevice,
  getAllBrowser,
  getAllManufacturer,
  getAllOs
} = require("../controllers/ticket");

ticketRouter.get("/", getAllTickets);
ticketRouter.get("/device",getAllDevice)
ticketRouter.get("/manufacturer/:device",getAllManufacturer)
ticketRouter.get("/os",getAllOs)
ticketRouter.get("/browser",getAllBrowser)

ticketRouter.post("/add", addTicket);
ticketRouter.put("/update/:id", updateTicket);
ticketRouter.get("/:id", getTicket);
ticketRouter.delete("/:id", deleteTicket);
ticketRouter.get("/user/:id", userTicket);

module.exports = ticketRouter;
