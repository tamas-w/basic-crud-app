import { db } from '../data/connection.js';

export class UserRepository {
  async findUser(username, email) {
    const [
      rows,
    ] = await db.query(
      '(SELECT * FROM users where name = ?) UNION (SELECT * FROM users where email = ?)',
      [username, email]
    );
    return rows;
  }
  async registerUser(username, password, email) {
    const rows = await db.query(
      'INSERT INTO users (name, password, email) VALUES (?, ?, ?)',
      [username, password, email]
    );
    return rows;
  }
<<<<<<< HEAD
  async updateUser(username, email, id) {
    const rows = await db.query(
      'UPDATE users SET name = ?, email = ? WHERE id = ?)',
      [username, email, id]
=======
  async updateUser(newUserName, newEmail, id) {
    const rows = await db.query(
      'UPDATE users SET name = ?, SET email = ? WHERE id = ?',
      [newUserName, newEmail, id]
>>>>>>> b16c6ec3d7f1551280dd4d47f57c65d8fb6e52c0
    );
    return rows;
  }
}
