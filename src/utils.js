
export const today = new Date();
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

export function getWeekOfMonth() {
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const dayOfMonth = today.getDate();
  const dayOfWeek = startOfMonth.getDay();
  const offset = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  return Math.ceil((dayOfMonth + offset) / 7);
}

export function getDayOfWeekName(locale = 'es') {
  return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(today);
}

export function getDayOfWeekNumberMondayFirst() {
  const day = today.getDay();
  return day === 0 ? 7 : day;
}
