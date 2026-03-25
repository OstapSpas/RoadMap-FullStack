const express = require('express');
const pool = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.use(authMiddleware);

// GET /api/dashboard/summary
router.get('/summary', async (req, res) => {
  try {
    const totalsResult = await pool.query(
      `
      SELECT
        COALESCE(SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END), 0) AS total_income,
        COALESCE(SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END), 0) AS total_expense
      FROM transactions
      WHERE user_id = $1
      `,
      [req.userId]
    );

    const recentResult = await pool.query(
      `
      SELECT id, payment_name, amount, method, category, type, date
      FROM transactions
      WHERE user_id = $1
      ORDER BY date DESC, id DESC
      LIMIT 5
      `,
      [req.userId]
    );

    const totalIncome = Number(totalsResult.rows[0].total_income || 0);
    const totalExpense = Number(totalsResult.rows[0].total_expense || 0);
    const totalBalance = totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      totalBalance,
      recentTransactions: recentResult.rows
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error get dashboard summary' });
  }
});

module.exports = router;