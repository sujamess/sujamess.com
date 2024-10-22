import dayjs from "dayjs";

export const formatDate = (
  date: string,
  format: string = "DD MMM YYYY",
): string => {
  return dayjs(date).format(format);
};

export const getDay = (date: string): string => {
  return dayjs(date).format("D");
};

export const getMonthAndYear = (date: string): string => {
  return dayjs(date).format("MMM YYYY");
};
