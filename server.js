const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Model } = require("objection");
const port = process.env.PORT || 8000;
const knexInstance = require("./db/knex");

const tee_times = require("./routes/tee_times");
const customers = require("./routes/customers");

Model.knex(knexInstance);

const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use("/teetimes", tee_times);
app.use("/customers", customers);

module.exports = { app };
