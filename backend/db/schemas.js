const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
    email: String,
    text: String,
    createdAt: Number
});

module.exports = {
    Comment
}
