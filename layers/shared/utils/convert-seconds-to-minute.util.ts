export function convertSecondsToMinute(value: number | null): string {
  if (!value) {
    return '00:00';
  }

  return `${Math.floor(value / 60)
    .toString()
    .padStart(2, '0')}:${Math.floor(value % 60)
    .toString()
    .padStart(2, '0')}`;
}
