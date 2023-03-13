const dateHandler = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const dateStrFormatted = `${day}/${month}/${year}`;
  return dateStrFormatted;
};
export default dateHandler;
