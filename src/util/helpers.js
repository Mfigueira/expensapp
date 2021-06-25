export const getYearFromYYYYmmDD = date => +date.slice(0, date.indexOf('-'));

export const getMonthFromYYYYmmDD = date =>
  date.slice(date.indexOf('-') + 1, date.lastIndexOf('-')) - 1;

export const getDayFromYYYYmmDD = date =>
  +date.slice(date.lastIndexOf('-') + 1);
