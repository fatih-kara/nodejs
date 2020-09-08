const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecordsSchema = new Schema({
    _id: {type: Schema.ObjectId, required: true},
    counts: {type: Array},
    createdAt: {type: Date, default: Date.now()},
    key: {type: String},
});

module.exports = mongoose.model("records", RecordsSchema);