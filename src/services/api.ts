export const API = "http://localhost:4000";

export async function apiGet<T>(url: string): Promise<T> {
  const res = await fetch(API + url);
  return res.json();
}

export async function apiPost<T>(url: string, body: any): Promise<T> {
  const res = await fetch(API + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return res.json();
}
