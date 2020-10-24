const SUCCESS_CODE = 200;
const INTERNAL_ERROR_CODE = 500;

const generateSuccessResponse = data => (
    {
        code: SUCCESS_CODE,
        message: "OK",
        ...data
    });

const generateErrorResponse = message => ({
    error: {message},
    code: INTERNAL_ERROR_CODE,
});

module.exports = {
    generateSuccessResponse,
    generateErrorResponse
}
