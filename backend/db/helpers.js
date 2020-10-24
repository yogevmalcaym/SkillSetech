const mongoose = require("mongoose");
const models = require("./models");
const constants = require('../utils/constants');


mongoose.connect(constants.DB_URI, {useUnifiedTopology: true, useNewUrlParser: true});

const connection = mongoose.connection;
connection.once("open", () => console.log(constants.DB_CONNECTED));
connection.on("error", console.error.bind(console, constants.DB_CONNECTION_ERROR));

const getComments = skip => models.Comment.find({}).sort('-createdAt').skip(skip).limit(10);

const addComment = data => {
    const productModel = new models.Comment(data);
    return productModel.save();
}

module.exports = {
    getComments,
    addComment,
};
