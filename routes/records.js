const express = require('express');
const RecordsController = require("../controllers/RecordController");
const router = express.Router();

router.post("/", RecordsController.records);

module.exports = router;
