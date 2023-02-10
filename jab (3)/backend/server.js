require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

const app = express();

// routes
const user = require("./routes/user");
const ticketRouter = require("./routes/ticket");

// connect database
connectDB();

//cors
app.use(cors({ origin: true, credentials: true }));

// initialize middleware

app.use(express.json({ extended: false }));
// app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/api/user", user);
app.use("/api/ticket", ticketRouter);

// setting up port
const PORT = process.env.PORT || 8000;

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
