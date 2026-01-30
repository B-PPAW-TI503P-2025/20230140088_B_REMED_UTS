exports.adminOnly = (req, res, next) => {
  if (req.headers['x-user-role'] !== 'admin') {
    return res.status(403).json({
      message: 'Akses hanya untuk Admin'
    });
  }
  next();
};

exports.userOnly = (req, res, next) => {
  if (req.headers['x-user-role'] !== 'user') {
    return res.status(403).json({
      message: 'Akses hanya untuk User'
    });
  }
  next();
};
