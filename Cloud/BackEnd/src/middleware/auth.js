const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Дістаємо токен з заголовку "Authorization: Bearer <token>"
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // Якщо токена немає — відмовляємо
  if (!token)
    return res.status(401).json({ error: 'Токен відсутній' });

  try {
    // Перевіряємо токен і дістаємо userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next(); // все ок — йдемо далі
  } catch {
    res.status(403).json({ error: 'Невірний токен' });
  }
};