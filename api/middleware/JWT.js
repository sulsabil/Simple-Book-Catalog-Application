import jwt from "jsonwebtoken";
// Middleware to check JWT token
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    // If token is valid, add the user to the request so it can be accessed in subsequent middleware
    req.user = user;
    next();
  });
};

// Middleware to handle token refresh
export const refreshToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    // Check if the token is about to expire (e.g., within the next 5 minutes)
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const expirationTimestamp = user.exp;

    if (expirationTimestamp - currentTimestamp <= 300) {
      // Generate a new token
      const newToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // Send the new token in the response
      res.setHeader('Authorization', `Bearer ${newToken}`);
    }

    next();
  });
};

