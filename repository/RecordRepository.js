const Records = require("../models/Records");
const query = require("../helpers/query");

exports.getRecords = function (req) {
        return Records.aggregate(query.getQuery(req), (err, result) => {
            if(err) {
                console.log(err);
            }
        });
};