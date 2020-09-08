exports.successResponse = function (res, msg) {
    const data = {
        code: 0,
        msg: msg
    };
    return res.status(200).json(data);
};

exports.successResponseWithRecords = function (res, msg, data) {
    const resData = {
        code: 0,
        msg: msg,
        records: data
    };
    return res.status(200).json(resData);
};

exports.errorResponse = function (res, msg) {
    const data = {
        code: 1,
        msg: msg,
    };
    return res.status(500).json(data);
};

exports.validationError = function (res, msg, data) {
    const resData = {
        code: -1,
        msg: msg,
        records: data
    };
    return res.status(400).json(resData);
};