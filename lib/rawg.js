const BASE_URL = "https://api.rawg.io/api";

export async function rawgFetch(path, searchParams = {}) {
  const key = process.env.RAWG_API_KEY;

  if (!key) {
    throw new Error(
      "RAWG_API_KEY is missing. Add it to .env.local and restart the dev server."
    );
  }

  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("key", key);

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  const response = await fetch(url.toString(), {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error(
      `RAWG request failed: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}