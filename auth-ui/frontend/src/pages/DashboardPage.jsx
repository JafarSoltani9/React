import { getUser, logout } from "../auth/auth";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const user = getUser();
  const nav = useNavigate();

  return (
    <div style={{ maxWidth: 700, margin: "60px auto", padding: 16 }}>
      <h1>Dashboard</h1>
      <p>Inloggad som: <b>{user?.name}</b> ({user?.email})</p>

      <button
        onClick={() => {
          logout();
          nav("/login", { replace: true });
        }}
      >
        Logga ut
      </button>
    </div>
  );
}
