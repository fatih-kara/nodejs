const express = require("express");
const recordsRouter = require("./records");

const app = express();

app.use("/records/", recordsRouter);

module.exports = app;