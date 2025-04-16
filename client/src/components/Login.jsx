// client/src/components/Login.jsx
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import axios from "axios";

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const token = await result.user.getIdToken(); // Firebase ID token

    // Send token to your server
    const res = await axios.post("http://localhost:5000/api/auth/google", {
      idToken: token,
    });

    console.log("User info from server:", res.data);
  } catch (error) {
    console.error("Google login failed:", error);
  }
};
