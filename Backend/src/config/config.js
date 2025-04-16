import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGO_URL,
  jwtSecret: process.env.SECRET_KEY,
  frontendUrl: process.env.FRONTEND_URL,
  dashboardUrl: process.env.DASHBOARD_URL,
  jwtExpires: process.env.JWT_EXPIRES,
  cookieExpire: process.env.COOKIE_EXPIRE,
};

