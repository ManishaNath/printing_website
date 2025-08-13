// /src/services/api.js
// Production: same-origin "/api" (Netlify proxy).
// Dev: use REACT_APP_API_URL or fallback to http://localhost:4000
const BASE =
  process.env.NODE_ENV === "production"
    ? ""
    : (process.env.REACT_APP_API_URL?.replace(/\/$/, "") || "http://localhost:4000");

export async function submitEnquiry(payload) {
  const res = await fetch(`${BASE}/api/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data?.error || `Request failed: ${res.status}`);
  }
  return res.json();
}
