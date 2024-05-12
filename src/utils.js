export const URL_FIEREBASE_DATA_BASE =
  "https://s8-inprocode-default-rtdb.europe-west1.firebasedatabase.app/balance";
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
  const options = { month: "numeric" };
  const formatMonth = new Intl.DateTimeFormat(language, options);

  return formatMonth.format(now);
};
export const getDayNumber = () => {
  return new Date().getDay();
};
export const getCurrentNameMonth = (language) => {
  const now = new Date();
  const options = { month: "long" };
  const formatMonth = new Intl.DateTimeFormat(language, options);
  return formatMonth.format(now);
};
export const getWeekName = (language) => {
  const now = new Date();
  const options = { weekday: "long" };
  const formatWeek = new Intl.DateTimeFormat(language, options);
  return formatWeek.format(now);
};
export const getNumberWeekCurrebtMonth = () => {
  const currentData = new Date();
  const firstDayMonth = new Date(
    currentData.getFullYear(),
    currentData.getMonth(),
    1
  );
  const firstDayWeek = firstDayMonth.getDay(); // 0 (Domingo) a 6 (Sábado)
  const currentDay = currentData.getDate();
  const weekNumber = Math.ceil((currentDay + firstDayWeek) / 7);
  return weekNumber;
};
export const getEspensePerWeekId = (week) => {
  console.log(week);
  return week;
  // return week.days.map((rec) => (rec = [...rec.expense]));
};
