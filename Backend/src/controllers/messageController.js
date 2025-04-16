import messageModel from "../models/messageSchema.js";
export const sendMessage = async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: "All filelds are required",
    });
    await messageModel.create({
      firstName,
      lastName,
      email,
      phone,
      message,
    });
  }
  res.status(200).json({
    success: true,
    message: "Message send successfully",
  });
};
