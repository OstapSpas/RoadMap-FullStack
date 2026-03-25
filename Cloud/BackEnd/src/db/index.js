// Імпортуємо Pool з пакету pg
// Pool = менеджер підключень до бази даних
const { Pool } = require('pg');

// Завантажуємо змінні з .env файлу
require('dotenv').config();

// Створюємо підключення до бази
const pool = new Pool({
  host: process.env.DB_HOST,         // localhost
  port: process.env.DB_PORT,         // 5432
  database: process.env.DB_NAME,     // spendly
  user: process.env.DB_USER,         // postgres
  password: process.env.DB_PASSWORD, // postgres
});

// Функція яка створює таблиці при старті сервера
const initDB = async () => {
  
  // Таблиця користувачів
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id            SERIAL PRIMARY KEY,
      email         VARCHAR(255) UNIQUE NOT NULL,
      name          VARCHAR(255) NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      created_at    TIMESTAMP DEFAULT NOW()
    )
  `);

  // Таблиця транзакцій
  // user_id REFERENCES users(id) — означає що кожна транзакція належить юзеру
  await pool.query(`
    CREATE TABLE IF NOT EXISTS transactions (
      id           SERIAL PRIMARY KEY,
      user_id      INTEGER REFERENCES users(id) ON DELETE CASCADE,
      amount       NUMERIC(12, 2) NOT NULL,
      payment_name VARCHAR(255) NOT NULL,
      method       VARCHAR(100),
      category     VARCHAR(100),
      type         VARCHAR(10) CHECK (type IN ('income', 'expense')) NOT NULL,
      date         TIMESTAMP DEFAULT NOW()
    )
  `);

  console.log('✅ Tables ready');
};

// Викликаємо функцію одразу при старті
initDB().catch(console.error);

// Експортуємо pool щоб використовувати в роутах
module.exports = pool;
