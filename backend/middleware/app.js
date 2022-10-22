const express = require("express");
const cors = require("cors");

const DataRouter = require("../router/data");
const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1", DataRouter);

module.exports = app;
