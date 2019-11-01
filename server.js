const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;

const tee_times = require("./routes/tee_times");
const customers = require("./routes/customers");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", tee_times);
app.use("/api", customers);

module.exports = { app };
