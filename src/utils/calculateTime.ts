export type Time = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/**
 * Function that takes JS-timestamp as argument and returns an object with remaining days, hours, minutes and seconds
 * @param time number (JS-timestamp)
 * @returns \{days, hours, minutes, seconds}
 */
export const calculateTime = (time: number): Time => {
  const timeRemaing =
    time * 1000 - Date.now() + new Date().getTimezoneOffset() * 60 * 1000;

  return {
    days: Math.floor(timeRemaing / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeRemaing / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((timeRemaing / 1000 / 60) % 60),
    seconds: Math.floor((timeRemaing / 1000) % 60),
  };
};
