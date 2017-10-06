/**
 * Converts a timestamp into the appropriate format for a message
 */
export function formatTime(timestamp) {
  const weekInMS = 604800000;
  const dateObj = new Date(timestamp);
  const day = dateObj.getDate();
  let dayOfWeek;
  switch (day) {
    case 1:
      dayOfWeek = "Mon";
      break;
    case 2:
      dayOfWeek = "Tue";
      break;
    case 3:
      dayOfWeek = "Wed";
      break;
    case 4:
      dayOfWeek = "Thu";
      break;
    case 5:
      dayOfWeek = "Fri";
      break;
    case 6:
      dayOfWeek = "Sat";
      break;
    case 7:
      dayOfWeek = "Sun";
      break;
    default:
      console.log("We received an invalid time in our time converter");
      dayOfWeek = "";
      break;
  }
  let hours = dateObj.getHours();
  const period = hours > 12 ? "PM" : "AM";
  if (hours > 12) {
    hours -= 12;
  }
  if (hours === 0) {
    hours = 12;
  }
  let minutes = dateObj.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${dayOfWeek}, ${hours}:${minutes} ${period}`;
}
