import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const getAllTodos = async () => {
  const result = await pool.query("SELECT * FROM todos");
  return result.rows;
};

export const createTodo = async (text) => {
  await pool.query("INSERT INTO todos (text) VALUES ($1)", [text]);
};
