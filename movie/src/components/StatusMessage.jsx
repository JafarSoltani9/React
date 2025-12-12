export default function StatusMessage({ type, message }) {
  if (!message) return null;

  const prefix =
    type === "error" ? "❌ " :
    type === "loading" ? "⏳ " :
    type === "empty" ? "📭 " :
    "ℹ️ ";

  return (
    <div
      style={{
        padding: 12,
        borderRadius: 10,
        border: "1px solid #444",
        marginTop: 12,
      }}
    >
      <span>{prefix}{message}</span>
    </div>
  );
}
