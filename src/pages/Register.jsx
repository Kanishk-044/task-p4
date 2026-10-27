import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) return setError("Please enter your full name.");
    if (password !== confirmPassword) return setError("Passwords do not match.");
    if (password.length < 6) return setError("Password must contain at least 6 characters.");
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: name.trim() });
      await setDoc(doc(db, "users", user.uid), {
        name: name.trim(),
        email: user.email,
        createdAt: serverTimestamp()
      });
      navigate("/login", { state: { message: "Registration successful! Please log in." } });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") setError("This email is already registered. Please log in.");
      else if (error.code === "auth/invalid-email") setError("Please enter a valid email address.");
      else if (error.code === "auth/weak-password") setError("Please choose a stronger password.");
      else setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-page">
      <h1>Create a DEV@Deakin Account</h1>
      {error && <p className="form-message error-message">{error}</p>}
      <form onSubmit={handleRegister}>
        <label htmlFor="register-name">Full Name</label>
        <input id="register-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" required />
        <label htmlFor="register-email">Email Address</label>
        <input id="register-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
        <label htmlFor="register-password">Password</label>
        <input id="register-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" minLength={6} required />
        <label htmlFor="register-confirm-password">Confirm Password</label>
        <input id="register-confirm-password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" minLength={6} required />
        <button type="submit" disabled={loading}>{loading ? "Creating Account..." : "Create Account"}</button>
      </form>
      <p className="auth-switch">Already have an account? <Link to="/login">Login</Link></p>
    </section>
  );
}
export default Register;
