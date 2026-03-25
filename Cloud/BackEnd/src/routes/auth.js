const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  // 1. Дістаємо дані з запиту
  const { email, name, password } = req.body;

  // 2. Перевіряємо чи всі поля заповнені
  if (!email || !name || !password)
    return res.status(400).json({ error: 'Всі поля обовязкові' });

  try {
    // 3. Перевіряємо чи такий email вже є
    const existing = await pool.query(
      'SELECT id FROM users WHERE email = $1', [email]
    );
    if (existing.rows.length > 0)
      return res.status(409).json({ error: 'Email вже використовується' });

    // 4. Хешуємо пароль (12 = складність хешування)
    const password_hash = await bcrypt.hash(password, 12);

    // 5. Зберігаємо юзера в БД
    const result = await pool.query(
      'INSERT INTO users (email, name, password_hash) VALUES ($1, $2, $3) RETURNING id, email, name',
      [email, name, password_hash]
    );

    // 6. Створюємо JWT токен
    const token = jwt.sign(
      { userId: result.rows[0].id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({ token, user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Помилка реєстрації' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: 'Email і пароль обовязкові' });

  try {
    // 1. Шукаємо юзера в БД
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1', [email]
    );
    const user = result.rows[0];

    // 2. Якщо не знайшли — помилка
    if (!user)
      return res.status(401).json({ error: 'Невірний email або пароль' });

    // 3. Порівнюємо пароль з хешем
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid)
      return res.status(401).json({ error: 'Невірний email або пароль' });

    // 4. Повертаємо токен
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Помилка логіну' });
  }
});

// GET /api/auth/me
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, email, name FROM users WHERE id = $1',
      [req.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Користувача не знайдено' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Помилка отримання користувача' });
  }
});

module.exports = router;
