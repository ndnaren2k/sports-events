export const dateTimeOptions = { hour: "numeric", minute: "2-digit" };

export const convertDateToTime = (dateString) => {
  return new Date(dateString).toLocaleTimeString("en-US", dateTimeOptions);
};
