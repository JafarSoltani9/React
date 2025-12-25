import { getUser, logout } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import MonthlyCalendar from "./MonthlyCalendar";


export default function DashboardPage() {
  const user = getUser();
  const nav = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      {/* Center everything without changing calendar size */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "700px", maxWidth: 900 }}>
          {/* Top bar aligned to calendar width */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              marginBottom: 12
            }}
          >
            <div>
              Logged in as: <b>{user?.name}</b>
            </div>

            <button
              onClick={() => {
                logout();
                nav("/login", { replace: true });
              }}
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid rgba(0,0,0,0.2)",
                background: "#fff",
                cursor: "pointer",
                fontWeight: 700
              }}
            >
              Logout
            </button>
          </div>

          <MonthlyCalendar />
        </div>
      </div>
    </div>
  );
}