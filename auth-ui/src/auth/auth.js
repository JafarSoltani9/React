const KEY = "fake_auth_user";

export function login(email) {
  localStorage.setItem(KEY, JSON.stringify({ email, ts: Date.now() }));
}

export function logout() {
  localStorage.removeItem(KEY);
}

export function getUser() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : null;
}

export function isLoggedIn() {
  return Boolean(getUser());
}
