class errorHandle extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  export default errorHandle;
  
  export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || 'Internal server error';
    err.statusCode = err.statusCode || 500;
  
   
    if (err.code === 11000) {
      const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
      err = new errorHandle(message, 400);
    }
  
    if (err.name === 'JsonWebTokenError') {
      const message = 'JSON web token is invalid, try again';
      err = new errorHandle(message, 400);
    }
  
    if (err.name === 'TokenExpiredError') {
      const message = 'JSON web token is expired, try again';
      err = new errorHandle(message, 400);
    }
  
    if (err.name === 'CastError') {
      const message = `Invalid ${err.path}`;
      err = new errorHandle(message, 400);
    }
  
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  };
  