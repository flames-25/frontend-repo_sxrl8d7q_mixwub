export const ASTRA_API_URL = 'https://api.ariselabs.in/api/generate';

export async function callAstra({ mode = 'problem_generation', niche = 'auto' } = {}) {
  const payload = {
    mode,
    inputs: { niche },
  };

  const res = await fetch(ASTRA_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  let data;
  const text = await res.text();
  try {
    data = JSON.parse(text);
  } catch (e) {
    data = { raw: text };
  }
  if (!res.ok) throw new Error(data?.message || `Request failed: ${res.status}`);
  return data;
}
