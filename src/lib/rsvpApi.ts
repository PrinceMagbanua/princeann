export type RsvpRow = {
  ID: string;
  GroupId: string;
  GroupName?: string;
  Name: string;
  Attendance?: string;
  UpdatedAt?: string;
};

export type RsvpListResponse = {
  headers: string[];
  rows: RsvpRow[];
};

export type UpdateAttendancePayload = {
  id: string;
  updates: Partial<Pick<RsvpRow, "Attendance">>;
};

export const ATTENDANCE_OPTIONS = ["Going", "Not Going", "Maybe"] as const;

export const WEB_APP_URL = (import.meta.env.VITE_RSVP_WEB_APP_URL as string) ||
  "https://script.google.com/macros/s/AKfycbzmlnZfHtG3iWn8l6ExmTxze9kvKR_wuK98__xnD_sthc1f1AtVrZjM8_CAtqin9ea-Lg/exec";

async function jsonFetch<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  // Do not set Content-Type by default; Apps Script returns 405 to OPTIONS preflight.
  // Keeping requests "simple" avoids the browser issuing an OPTIONS preflight.
  const res = await fetch(input, init);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Request failed: ${res.status} ${res.statusText} - ${text}`);
  }
  return (await res.json()) as T;
}

export async function fetchRsvpList(signal?: AbortSignal): Promise<RsvpListResponse> {
  const url = new URL(WEB_APP_URL);
  url.searchParams.set("op", "list");
  // Simple GET: no custom headers to avoid preflight
  return await jsonFetch<RsvpListResponse>(url.toString(), { signal, method: "GET" });
}

export async function updateAttendance(id: string, attendance: string): Promise<{ ok: boolean }> {
  const payload: UpdateAttendancePayload = {
    id,
    updates: { Attendance: attendance },
  };
  // Use text/plain to keep the request "simple" and avoid CORS preflight.
  return await jsonFetch<{ ok: boolean }>(WEB_APP_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });
}


