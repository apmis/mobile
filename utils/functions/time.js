// 🟢 This Function accepts a date object e.g ["2023-01-25T09:46:20.499Z"] and returns just the time in a clear format e.g 2:30am or 12:00pm
const timeHandler = (dateStr) => {
  const date = new Date(dateStr);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  let suffix = "am";
  let displayHours = hours;
  if (hours >= 12) {
    suffix = "pm";
    displayHours = hours - 12;
  }
  if (displayHours === 0) {
    displayHours = 12;
  }
  const timeStr = `${displayHours}:${minutes
    .toString()
    .padStart(2, "0")}${suffix}`;
  return timeStr;
};
export default timeHandler;
