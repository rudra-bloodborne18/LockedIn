const db = require("../config/db");

const userModel = {
  // Create a new user
  create: async (username, email, passwordHash) => {
    const query = `
      INSERT INTO users (username, email, password_hash)
      VALUES ($1, $2, $3)
      RETURNING id, username, email, created_at
    `;
    const values = [username, email, passwordHash];
    const result = await db.query(query, values);
    return result.rows[0];
  },

  // Find user by id
  findById: async (id) => {
    const query =
      "SELECT id, username, email, profile_picture_url, created_at FROM users WHERE id = $1";
    const result = await db.query(query, [id]);
    return result.rows[0];
  },

  // Find user by email (for login)
  findByEmail: async (email) => {
    const query = "SELECT * FROM users WHERE email = $1";
    const result = await db.query(query, [email]);
    return result.rows[0];
  },

  // Update user profile picture
  updateProfilePicture: async (userId, pictureUrl) => {
    const query =
      "UPDATE users SET profile_picture_url = $1 WHERE id = $2 RETURNING *";
    const result = await db.query(query, [pictureUrl, userId]);
    return result.rows[0];
  },

  // Update user email
  updateEmail: async (userId, newEmail) => {
    const query = "UPDATE users SET email = $1 WHERE id = $2 RETURNING *";
    const result = await db.query(query, [newEmail, userId]);
    return result.rows[0];
  },

  // Delete user by id
  deleteById: async (id) => {
    const query = "DELETE FROM users WHERE id = $1 RETURNING *";
    const result = await db.query(query, [id]);
    return result.rows[0];
  },

  // Get all users
  getAllUsers: async () => {
    const query =
      "SELECT id, username, email, profile_picture_url, created_at FROM users";
    const result = await db.query(query);
    return result.rows;
  },

  // Update user password
  updatePassword: async (userId, newPasswordHash) => {
    const query =
      "UPDATE users SET password_hash = $1 WHERE id = $2 RETURNING *";
    const result = await db.query(query, [newPasswordHash, userId]);
    return result.rows[0];
  },
};

module.exports = userModel;
