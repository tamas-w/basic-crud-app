import { db } from '../data/connection.js';

export class UserRepository {
  async findUser(email) {
    const [rows] = await db.query('SELECT * FROM user where email = ?', [
      email,
    ]);
    return rows;
  }