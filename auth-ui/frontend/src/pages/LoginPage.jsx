import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../auth/auth";
import styles from "./AuthPage.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/dashboard";

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const e2 = email.trim().toLowerCase();
    const p2 = password.trim();

    if (!e2) return setError("Email is required.");
    if (!p2) return setError("Password is required.");

    setLoading(true);
    try {
      await login(e2, p2);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err?.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <div className={styles.label}>Email</div>
            <input
              className={styles.input}
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div>
            <div className={styles.label}>Password</div>
            <input
              className={styles.input}
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          <button className={styles.button} type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.linksRow}>
            <Link className={styles.link} to="/register">
              Create account
            </Link>

            <Link className={styles.link} to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <div className={styles.note}>
            Tip: make sure your backend is running and Vite proxy points to it.
          </div>
        </form>
      </div>
    </div>
  );
}
