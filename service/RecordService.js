const apiResponse = require("../helpers/apiResponse");
const recordRepository = require("../repository/RecordRepository");

exports.getRecords = function (req, res, errors) {
    try {
        if (!errors.isEmpty()) {
            return apiResponse.validationError(res, "Validation Error.", errors.array());
        }
        else {
            recordRepository.getRecords(req) .then((records)=>{
                if(records.length > 0){
                    return apiResponse.successResponseWithRecords(res, "Success", records);
                }else{
                    return apiResponse.successResponseWithRecords(res, "Success", []);
                }
            });
        }
    }
    catch (err) {
        //throw error in json response with status 500.
        return apiResponse.errorResponse(res, err);
    }

};