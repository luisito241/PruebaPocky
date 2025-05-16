import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export interface Message {
  id_message?: number;
  content: string;
  sender: 'bot' | 'user';
  created_at?: Date;
}

export const getAllMessages = async (): Promise<Message[]> => {
  const [rows] = await pool.query('SELECT * FROM messages ORDER BY id_message DESC');
  return rows as Message[];
};

export const saveMessage = async (content: string, sender: 'bot' | 'user'): Promise<Message> => {
  const [result] = await pool.query('INSERT INTO messages (content, sender) VALUES (?, ?)', [content, sender]);
  const insertId = (result as any).insertId;
  return { id_message: insertId, content, sender };
};
