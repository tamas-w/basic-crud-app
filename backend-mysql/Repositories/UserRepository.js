import { db } from '../data/connection.js';

export class UserRepository {
  async findOneUser(username, email) {
    const user = await db.query(
      'SELECT * FROM users 
       WHERE name ? 
       AND email = ?', 
       [username, email]
    );
      
    return await user.results;
  }
  
  async registerUser(username, password, email) {
    await db.query(
      'INSERT INTO users (name, password, email) 
       VALUES (?, ?, ?)',
      [username, password, email]
    );
    
    const user = await db.query('SELECT * FROM users 
                                 WHERE username ? 
                                 AND email = ?', 
                                 [username, email]
                               );
    
    return await user.results;
  }
}
