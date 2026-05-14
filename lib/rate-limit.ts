export interface RateLimitResult {
  success: boolean;
  message?: string;
}

export async function checkRateLimit(
  kv: any,
  ip: string,
): Promise<RateLimitResult> {
  const now = new Date();
  const hourKey = `hour:${ip}:${now.getUTCHours()}`;
  const dayKey = `day:${ip}:${now.toISOString().slice(0, 10)}`;

  if (!kv) {
    return { success: true };
  }

  try {
    const hourCount = Number((await kv.get(hourKey)) || 0);
    const dayCount = Number((await kv.get(dayKey)) || 0);

    if (hourCount >= 2) {
      return { success: false, message: "Hourly generation limit reached. Try again later." };
    }
    if (dayCount >= 5) {
      return { success: false, message: "Daily generation limit reached. Try again tomorrow." };
    }

    await kv.put(hourKey, String(hourCount + 1), { expirationTtl: 3600 });
    await kv.put(dayKey, String(dayCount + 1), { expirationTtl: 86400 });
  } catch (e) {
    console.error("KV error:", e);
  }

  return { success: true };
}
