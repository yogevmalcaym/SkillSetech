const dbHelpers = require('./db/helpers');
const responseGenerator = require('./utils/responseGenerator');
const constants = require('./utils/constants');

const getComments = async ({queryIndex, fixedSkip}) => {
    try {
        const skip = (parseInt(queryIndex) - 1) * 10 + parseInt(fixedSkip);
        const comments = await dbHelpers.getComments(skip);
        return responseGenerator.generateSuccessResponse({comments})

    } catch (error) {
        console.log(`ERROR at [getComments]: ${error.message}`);
        return responseGenerator.generateErrorResponse(constants.GET_COMMENTS_ERROR);
    }

};

const addNewComment = async commentData => {
    try {
        // Make sure that the same email will be always the same string.
        commentData.email = commentData.email.trim().toLowerCase();
        commentData.createdAt = new Date().getTime();

        const newCommentData = await dbHelpers.addComment(commentData);
        return responseGenerator.generateSuccessResponse({newCommentData});
    } catch (error) {
        console.log(`ERROR at [addNewComment]: ${error.message}`);
        return responseGenerator.generateErrorResponse(constants.ADD_NEW_COMMENT_ERROR);
    }
};

module.exports = {
    getComments,
    addNewComment
}
