import { db } from '../data/connection.js';

export class UserRepository {
  async findUser(email) {
    const [rows] = await db.query('SELECT * FROM user where email = ?', [
      email,
    ]);
    return rows;
  }
  async registerUser(username, password, email) {
    console.log(' name, pw, email', username, password, email);
    const [rows] = await db.query(
      'INSERT INTO user (username, password, email) VALUES (?, ?, ?)',
      [username, password, email]
    );
    return rows;
  }
}
