import messageModel from "../models/messageSchema.js";
import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import errorHandle from "../middleware/errorMiddleware.js";
export const sendMessageController = catchAsyncErrors(async (req, res,next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new errorHandle("All fields are required", 400));
  }

  await messageModel.create({ firstName, lastName, email, phone, message });
  res.status(200).json({
    success: true,
    message: "Message send successfully",
  });
});
