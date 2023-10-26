import { createConnection } from "mysql2/promise";

async function createDbConnection() {
  const db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }
  const connection = await createConnection(db);
  return connection;
}

async function query(sql, params, connection) {
  const [results] = await connection.execute(sql, params);

  return results;
}

export {
  createDbConnection,
  query,
};
