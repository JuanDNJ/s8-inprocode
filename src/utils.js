export const getCurrentDay = () => {
  return new Date().getDay();
};

export const getCurrentMounth = () => {
  return new Date().getMonth();
};

export const getCurrentWeek = () => {
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
