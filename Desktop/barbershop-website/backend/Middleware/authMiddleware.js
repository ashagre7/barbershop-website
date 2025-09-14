const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const verifyAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'אין טוקן' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: 'גישה נדחתה – לא אדמין' });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: 'טוקן לא תקין' });
  }
};

module.exports = { verifyAdmin };
