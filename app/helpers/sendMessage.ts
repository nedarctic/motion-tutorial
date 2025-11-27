const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const messageUrl = `${BACKEND_URL}/message/`;

export async function sendMessage(data: {
  name: string;
  email: string;
  phone?: string;
  travel_dates?: string;
  message: string;
}) {
  try {
    const res = await fetch(messageUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    return {
      success: res.ok,
      error: !res.ok ? json.error || "Failed to send message" : null,
    };
  } catch (err) {
    return {
      success: false,
      error: "Network error. Please try again.",
    };
  }
}
