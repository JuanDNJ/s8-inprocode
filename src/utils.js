export const getMontsByYear = (language) => {
  let meses = [];
  for (let i = 0; i < 12; i++) {
    const nombreMes = new Intl.DateTimeFormat(language, {
      month: "long",
    }).format(new Date(2000, i, 1));
    meses = [...meses, nombreMes];
  }
  return meses;
};
export const getMonthInCurrent = (language) => {
  const now = new Date();
  const options = { month: "long" };
  const formatMonth = new Intl.DateTimeFormat(language, options);

  return formatMonth.format(now);
};
