import jwt from 'jsonwebtoken';

export const protectAdmin = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'samuel_portfolio_super_secure_jwt_secret_key_2026_dev'
      );
      req.admin = decoded;
      return next();
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Invalid or expired authentication token.' });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized. Please login to access admin features.' });
  }
};
