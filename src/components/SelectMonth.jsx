import arrowBack from "../assets/arrow_back.svg";
import arrowForward from "../assets/arrow_forward.svg";
import { useTranslation } from "react-i18next";
import bills from "../data/bills.json";
import { useState } from "react";


export default function SelectMonth() {
  const current_year = bills[2024]
  const [nameMonths] = useState(Object.keys(current_year))
  const [count, setCount] = useState(5);

  const { t } = useTranslation();

  const handlerBack = () => {
    if (count === 0) return
    setCount(prev => prev -= 1)
  };
  const handlerNext = () => {
    if (count >= 11) return
    setCount(prev => prev += 1)
  };

  return (
    <nav className="flex w-full items-center justify-center gap-1">
      <div className="flex justify-center">
        <button onClick={handlerBack}>
          <img width={18} height={18} src={arrowBack} alt="Arrow Back" />
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <strong className="text-center text-blue-900 font-bold">
          {t(`months.${nameMonths[count]}`)}

        </strong>
      </div>
      <div className="flex">
        <button onClick={handlerNext}>
          <img width={18} height={18} src={arrowForward} alt="Arrow Back" />
        </button>
      </div>
    </nav>
  );
}
