const isodate = require("isodate");

exports.getQuery = function (req) {
    const query = [
        {
            $project: {
                _id: 0,
                key: 1,
                createdAt: 1,
                totalCount: {$sum: "$counts"}
            }
        },
        {
            $match: {
                createdAt: { $gt: isodate(req.body.startDate), $lt: isodate(req.body.endDate) },
                totalCount : { $gt: req.body.minCount, $lt: req.body.maxCount }
            }
        }
    ];
    return query;
};