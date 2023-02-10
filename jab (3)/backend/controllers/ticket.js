const { default: mongoose } = require("mongoose");
const Ticket = require("../models/ticket");
const User = require("../models/user");

exports.getAllTickets = async (req, res) => {
  let tickets;
  try {
    tickets = await Ticket.find().populate("user");
  } catch (error) {
    return console.log(error);
  }
  if (!tickets) {
    return res.status(404).json({ message: "No blog find " });
  }
  return res.status(200).json({ tickets });
};

exports.addTicket = async (req, res) => {
  const {
    title,
    description,
    image,
    user,
    device,
    manufacturer,
    os,
    os_version,
    browser,
    browser_version,
  } = req.body;

  let existingUser;

  try {
    existingUser = await User.findById(user);
  } catch (error) {
    console.log(error);
  }

  if (!existingUser) {
    return res.status(400).json({ message: "unable to find user by this Id" });
  }

  const blog = new Ticket({
    title,
    description,
    image,
    user,
    device,
    manufacturer,
    os,
    os_version,
    browser,
    browser_version,
  });

  try {
    // await blog.save();
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.ticket.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
  return res.status(200).json({ blog });
};

exports.updateTicket = async (req, res) => {
  const TicketId = req.params.id;
  const { title, description } = req.body;
  let ticket;

  try {
    ticket = await Ticket.findByIdAndUpdate(
      TicketId,
      { title, description },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }

  if (!ticket) {
    return res.status(500).json({ message: "Unable to update" });
  }
  return res.status(200).json({ ticket });
};

exports.getTicket = async (req, res) => {
  const ticketId = req.params.id;

  let ticket;

  try {
    ticket = await Ticket.findById(ticketId);
  } catch (error) {
    return console.log(error);
  }

  if (!ticket) {
    return res.status(404).json({ message: "Unable to find Post" });
  }

  return res.status(200).json({ ticket });
};

exports.deleteTicket = async (req, res) => {
  const ticketId = req.params.id;

  let ticket;
  try {
    ticket = await Ticket.findByIdAndDelete(ticketId).populate("user");
    await ticket.user.ticket.pull(ticket);
    // console.log(ticketId);
    await ticket.user.save();
  } catch (error) {
    console.log(error);
  }
  if (!ticket) {
    return res.status(500).json({ message: "Unable to delete" });
  }
  return res.status(200).json({ message: "Deleted" });
};

exports.userTicket = async (req, res) => {
  const userId = req.params.id;
  let userTicket;

  try {
    userTicket = await User.findById(userId).populate("tickets");
  } catch (error) {
    return console.log(error);
  }

  if (!userTicket) {
    return res.status(404).json({ message: "No Blg found" });
  }

  return res.status(200).json({ user: userTicket });
};

exports.getAllDevice = async (req, res) => {
  let devices = ["Tablet", "Phone", "Laptop", "Desktop", "Server"];
  return res.status(200).json({ data: devices });
};

exports.getAllManufacturer = async (req, res) => {
  let device = req.params.device;
  switch (device) {
    case "Tablet":
      return res
        .status(200)
        .json({
          data: [
            "Lenovo",
            "Alcatel",
            "Samsung",
            "Umidigi",
            "Amazon (Fire)",
            "TCL",
            "Asus",
            "Other",
          ],
        });
      break;
    
    case "Desktop" || "Laptop"|| "server" :
        return res.status(200).json({data: [
          "Lenovo",	
          "HP",
          "Dell",
          "Apple",
          "Acer",
          "Asus",
          "Toshiba",
          "IBM",
          "NEC",
          "Fujitsu",
          "Others"]})
          break;
      case "Phone": return res.status(200).json({data: [
        "Samsung",
        "Google",
        "Vivo",
        "LG",
        "Motorola",
        "Sony",
        "OnePlus",
        "Huawei",
        "Nokia",
        "Blackberry",
        "Lenovo",
        "Oppo",
        "HTC",
        "Microsoft",
        "Others",
        "Apple"
      ]})
      default : return res.status(200).json({data: []})
    break;
  }
};

exports.getAllBrowser= async(req,res)=>{
  let browsers = ["chrome","google","safari","firefox","IE","other"]
  return res.status(200).json({data: browsers})
}

exports.getAllOs= async(req,res)=>{
  let AllOs= [	"MAC OS",
	"Chrome OS",
	"Android ",
	"Linux OS",
	"Ubuntu",
  "MS Windows"];

  return res.status(200).json({data: AllOs})
}