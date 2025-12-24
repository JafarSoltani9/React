const STORAGE_KEY = "auth_state";

function saveAuth(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function readAuth() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

export function isLoggedIn() {
  return !!readAuth()?.token;
}

export function getUser() {
  return readAuth()?.user || null;
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}

// Fixes: "Unexpected end of JSON input"
async function readJsonSafe(res) {
  const text = await res.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(`Server did not return JSON (status ${res.status}). Body: ${text.slice(0, 200)}`);
  }
}

export async function checkEmail(email) {
  const res = await fetch("/api/auth/check-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  const data = await readJsonSafe(res);
  if (!res.ok) throw new Error(data?.error || "Email check failed.");
  return data; // { exists: true/false }
}

export async function login(email, password) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await readJsonSafe(res);
  if (!res.ok) throw new Error(data?.error || "Login failed.");
  saveAuth(data);
  return data;
}

export async function register({ name, email, password }) {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  const data = await readJsonSafe(res);
  if (!res.ok) throw new Error(data?.error || "Register failed.");
  saveAuth(data);
  return data;
}
