import { db } from '../data/connection.js';

export class UserRepository {
  async findUserForLogin(email) {
    const [rows] = await db.query('SELECT * FROM users where email = ?', 
      [email]
    );
    return rows;
  }

  async findUser(username, email) {
    const [rows] = await db.query(
      '(SELECT * FROM users where name = ?) UNION (SELECT * FROM users where email = ?)',
      [username, email]
    );
    console.log('repoban rows', rows);
    return rows;
  }
  async registerUser(username, password, email) {
    const rows = await db.query(
      'INSERT INTO users (name, password, email) VALUES (?, ?, ?)',
      [username, password, email]
    );
    return rows;
  }
  async updateUser(newUserName, newEmail, id) {
    const rows = await db.query(
      'UPDATE users SET name = ?, SET email = ? WHERE id = ?',
      [newUserName, newEmail, id]
    );
    return rows;
  }
}
