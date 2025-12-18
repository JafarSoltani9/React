import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../auth/auth";
import styles from "./DashboardPage.module.css";

export default function DashboardPage() {
  const user = getUser();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.text}>
          Welcome{user?.email ? `, ${user.email}` : ""}!
        </p>

        <div className={styles.actions}>
          <button className={styles.button} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
