import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../auth/auth";
import styles from "./AuthPage.module.css";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const n2 = name.trim();
    const e2 = email.trim().toLowerCase();
    const p2 = password.trim();

    if (!n2) return setError("Name is required.");
    if (!e2) return setError("Email is required.");
    if (p2.length < 6) return setError("Password must be at least 6 characters.");

    setLoading(true);
    try {
      await register({ name: n2, email: e2, password: p2 });
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err?.message || "Register failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create account</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <div className={styles.label}>Name</div>
            <input
              className={styles.input}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </div>

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
              placeholder="Min 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>

          <button className={styles.button} type="submit" disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.linksRow}>
            <Link className={styles.link} to="/login">
              Back to login
            </Link>

            <span />
          </div>
        </form>
      </div>
    </div>
  );
}
