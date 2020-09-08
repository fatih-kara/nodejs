const { body,validationResult } = require("express-validator");
const constants = require("../helpers/constants");
const recordService = require("../service/RecordService");

exports.records = [
    body("startDate", "Date format should be YYYY-MM-DD").isDate().matches(constants.DATE_REGEX),
    body("endDate", "Date format should be YYYY-MM-DD").isDate().matches(/^\d{4}-\d{2}-\d{2}$/),
    function (req, res) {
        const errors = validationResult(req);
        return recordService.getRecords(req, res, errors);
    }
];