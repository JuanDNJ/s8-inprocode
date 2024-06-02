import arrowBack from "../assets/arrow_back.svg";
import arrowForward from "../assets/arrow_forward.svg";

import { useTranslation } from "react-i18next";

import bills from "../data/bills.json";
import { useState } from "react";


export default function Menu() {

  const current_year = bills[2024]
  const month = current_year['june']
  const weeks = Object.keys(month)
  const [week, setWeek] = useState(0)

  const { t } = useTranslation();

  const handlerClickBack = () => {
    if (week === 0) return
    setWeek(prev => prev -= 1)
  };
  const handlerClickForward = () => {
    if (week >= weeks.length - 1) return
    setWeek(prev => prev += 1)
  };


  return (
    <nav className="flex w-full items-center justify-center gap-1">
      <div className="flex justify-center">
        <button onClick={handlerClickBack}>
          <img width={18} height={18} src={arrowBack} alt="Arrow Back" />
        </button>
      </div>
      <div className="flex-1 gap-2 flex justify-center ">
        <strong className="text-center text-blue-900 font-bold">
          {t("week")}
        </strong>

      </div>
      <div className="flex">
        <button onClick={handlerClickForward}>
          <img width={18} height={18} src={arrowForward} alt="Arrow Back" />
        </button>
      </div>
      <strong>{week + 1}</strong>
    </nav>
  );
}
