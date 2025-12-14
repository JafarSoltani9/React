import styles from "./StatusMessage.module.css";

export default function StatusMessage({ type, message }) {
  if (!message) return null;

  const prefix =
    type === "error" ? "❌ " :
    type === "loading" ? "⏳ " :
    type === "empty" ? "📭 " :
    "ℹ️ ";

  return (
    <div className={styles.box}>
      <span>{prefix}{message}</span>
    </div>
  );
}
