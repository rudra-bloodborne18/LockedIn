import express from "express";
import admin from "../firebase.js";
import userModel from "../models/user.js";

const authRoutes = express.Router();

authRoutes.post("/google", async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid, name, email, picture } = decodedToken;

    // Check if user exists in DB
    let user = await userModel.findByEmail(email);

    if (!user) {
      user = await userModel.createFromGoogle(name, email, picture);
    }

    res.json({ user });
  } catch (err) {
    console.error("Error verifying token:", err);
    res.status(401).json({ error: "Unauthorized" });
  }
});

export default authRoutes;
