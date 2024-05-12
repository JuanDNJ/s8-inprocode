import { useState } from "react";

export function useWeek() {
  const [week, setWeek] = useState([]);
  const updateWeek = (week) => {
    setWeek(() => week);
  };
  return { week, updateWeek };
}
