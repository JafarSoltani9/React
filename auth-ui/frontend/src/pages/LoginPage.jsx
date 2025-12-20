import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../auth/auth";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/dashboard";

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    const emailValue = email.trim();
    const passwordValue = password.trim();

    if (!emailValue || !passwordValue) {
      setError("Please enter email and password.");
      return;
    }

    if (!isValidEmail(emailValue)) {
      setError("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    
    login(emailValue);
    navigate(redirectTo, { replace: true });
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <input
          className={styles.input}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        <button className={styles.button} type="submit">
          Sign in
        </button>

        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  );
}
