export function convertSecondsToMinute(value: number): string {
  return `${Math.floor(value / 60)
    .toString()
    .padStart(2, '0')}:${Math.floor(value % 60)
    .toString()
    .padStart(2, '0')}`;
}
