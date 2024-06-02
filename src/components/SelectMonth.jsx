import arrowBack from "../assets/arrow_back.svg";
import arrowForward from "../assets/arrow_forward.svg";
import { useTranslation } from "react-i18next";

import { useState } from "react";
import { incrementMonth, decrementMonth } from "../store/slices/balance";
import { getDispacth, getSelector } from "../store";


export default function SelectMonth() {
  const { countMonth, bills } = getSelector(state => state.balance_sheets)
  const dispatch = getDispacth()

  const [nameMonths] = useState(Object.keys(bills[2024]))

  const { t } = useTranslation();
  const handlerBack = () => {
    if (countMonth === 0) return
    dispatch(decrementMonth())
  };
  const handlerNext = () => {
    if (countMonth >= 11) return
    dispatch(incrementMonth())
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
          {t(`months.${nameMonths[countMonth]}`)}
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
