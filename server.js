const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8000;

const tee_times = require("./routes/tee_times");
const customers = require("./routes/customers");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/tee_times", tee_times);
app.use("/customers", customers);

app.listen(port, () => console.log("listening on port " + port));
