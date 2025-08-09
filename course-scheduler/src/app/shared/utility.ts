export function formatTime(seconds?: number | null): string {
  if (seconds == null) return '-';

  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);

  const hrsStr = hrs.toString().padStart(2, '0');
  const minsStr = mins.toString().padStart(2, '0');

  return `${hrsStr}:${minsStr}`;
}
