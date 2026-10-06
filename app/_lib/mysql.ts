import 'server-only';
import mysql, { Pool, RowDataPacket } from 'mysql2/promise';

let pool: Pool | undefined;
let schemaReady: Promise<void> | undefined;

export type ReviewRow = RowDataPacket & {
  id: number;
  name: string;
  trip_type: string;
  review_text: string;
  rating: number;
  created_at: Date;
};

function required(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: required('DB_HOST'),
      port: Number(process.env.DB_PORT || 3306),
      user: required('DB_USER'),
      password: process.env.DB_PASSWORD || '',
      database: required('DB_NAME'),
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      charset: 'utf8mb4',
    });
  }
  return pool;
}

export async function ensureReviewsTable() {
  if (!schemaReady) {
    schemaReady = getPool().execute(`
      CREATE TABLE IF NOT EXISTS reviews (
        id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        trip_type VARCHAR(120) NOT NULL,
        review_text TEXT NOT NULL,
        rating TINYINT UNSIGNED NOT NULL DEFAULT 5,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id),
        INDEX idx_reviews_created_at (created_at)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `).then(() => undefined).catch((error) => {
      schemaReady = undefined;
      throw error;
    });
  }
  await schemaReady;
}
