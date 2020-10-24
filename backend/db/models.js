const mongoose = require("mongoose");
const schemas = require('./schemas');

const Comment = mongoose.model("Comment", schemas.Comment);

module.exports = {
    Comment
}
