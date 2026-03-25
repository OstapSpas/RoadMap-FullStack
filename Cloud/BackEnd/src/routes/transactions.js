const express = require('express');
const pool = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Всі роути захищені — треба токен
router.use(authMiddleware);

// GET /api/transactions — отримати всі транзакції юзера
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM transactions WHERE user_id = $1 ORDER BY date DESC',
      [req.userId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Помилка отримання транзакцій' });
  }
});

// POST /api/transactions — створити нову транзакцію
router.post('/', async (req, res) => {
  const { amount, payment_name, method, category, type, transaction_date } = req.body;

  if (amount == null || !payment_name || !type) {
    return res.status(400).json({ error: 'amount, payment_name і type обовязкові' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO transactions (user_id, amount, payment_name, method, category, type, date)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        req.userId,
        amount,
        payment_name,
        method || null,
        category || null,
        type,
        transaction_date || new Date().toISOString().split("T")[0]
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Помилка створення транзакції' });
  }
});

// PUT /api/transactions/:id — оновити транзакцію
router.put('/:id', async (req, res) => {
  const { amount, payment_name, method, category, type, transaction_date } = req.body;

  try {
    const result = await pool.query(
      `UPDATE transactions
       SET amount = COALESCE($1, amount),
           payment_name = COALESCE($2, payment_name),
           method = COALESCE($3, method),
           category = COALESCE($4, category),
           type = COALESCE($5, type),
           date = COALESCE($6, date)
       WHERE id = $7 AND user_id = $8
       RETURNING *`,
      [
        amount,
        payment_name,
        method,
        category,
        type,
        transaction_date,
        req.params.id,
        req.userId
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Транзакцію не знайдено' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Помилка оновлення транзакції' });
  }
});

// DELETE /api/transactions/:id — видалити транзакцію
router.delete('/:id', async (req, res) => {
  try {
    const result = await pool.query(
      'DELETE FROM transactions WHERE id = $1 AND user_id = $2 RETURNING id',
      [req.params.id, req.userId]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ error: 'Транзакцію не знайдено' });

    res.json({ message: 'Транзакцію видалено', id: result.rows[0].id });
  } catch (err) {
    res.status(500).json({ error: 'Помилка видалення транзакції' });
  }
});

module.exports = router;