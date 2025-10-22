export function convertSecondsToHourAndMinutes(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  // const remainingSeconds = seconds % 60;

  const hourString = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : '';
  const minuteString = minutes > 0 ? `${minutes} min` : '';

  if (hours > 0) {
    return `${hourString} : ${minuteString || '0 min'}`;
  } else if (!hours && minutes > 0) {
    return `${minuteString}`;
  }

  return '1 min';
}
