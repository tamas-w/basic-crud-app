import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 2,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export const db = {
  query(query, values) {
    return new Promise((resolve, reject) => {
      pool.query(query, values, (err, results, fields) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(results);
      });
    });
  },
};