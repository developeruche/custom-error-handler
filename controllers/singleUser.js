const ErrorResponse = require("../utils/errorResponse")


exports.singleUser = async (req, res, next) => {
    try {
        const user = await user.findById(req.params.id);
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        next(new ErrorResponse("User not found", 404));
    }
}