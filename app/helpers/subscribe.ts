const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const subscribeUrl = `${BACKEND_URL}/subscribe/`;

export async function subscribe(email: string) {
  try {
    const res = await fetch(subscribeUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    return {
      success: res.ok,
      error: res.ok ? null : data,
    };
  } catch (err) {
    return {
      success: false,
      error: { detail: "Network error. Please try again." },
    };
  }
}
