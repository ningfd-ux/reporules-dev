"use client";

import { useEffect } from "react";

interface PageViewTrackerProps {
  eventName: string;
  params?: Record<string, string | number>;
}

/**
 * Client component that fires a GA4 event on mount.
 * Use in server component pages to track page views as custom events.
 */
export default function PageViewTracker({ eventName, params }: PageViewTrackerProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName, params);
    }
  }, [eventName, params]);

  return null;
}
