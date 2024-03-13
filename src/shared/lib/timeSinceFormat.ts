export function timeSinceFormat(timestamp: number | string): string {
  const _timestamp =
    typeof timestamp === "string" ? new Date(timestamp).getTime() : timestamp;
  const seconds: number = Math.floor(
    (new Date().getTime() - _timestamp) / 1000
  );
  let interval: number = Math.floor(seconds / 86400);

  if (interval >= 30) {
    return Math.floor(interval / 30) + "달 전";
  }
  if (interval >= 7) {
    return Math.floor(interval / 7) + "주 전";
  }

  return (interval || 0) + "일 전";
}
