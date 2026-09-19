const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Agar db.js mein database connection code hai
require("./db"); 

const app = express();

app.use(cors());
app.use(express.json());

// Routes import aur use karein (check kar lein routes.js file ka naam)
const routes = require("./routes");
app.use("/api", routes);

// index.html serve karne ke liye (agar frontend serve karna hai)
const path = require("path");
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
