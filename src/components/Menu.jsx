import arrowBack from "../assets/arrow_back.svg";
import arrowForward from "../assets/arrow_forward.svg";
import { useDispatch, useSelector } from "react-redux";

import {
  discount,
  increase,
  weekAmount,
  weekDiscount,
} from "../store/slices/counter";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function Menu() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { countWeek, count } = useSelector((state) => state.counter);
  const { data } = useSelector((state) => state.balance);
  const handlerClickBack = () => {
    if (countWeek <= 1) return;

    dispatch(weekDiscount());
  };
  const handlerClickForward = () => {
    if (countWeek >= data.length) return;

    dispatch(weekAmount());
  };

  useEffect(() => {
    console.log(data.length);
  }, [data]);
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
        <strong>{count}</strong>
      </div>
      <div className="flex">
        <button onClick={handlerClickForward}>
          <img width={18} height={18} src={arrowForward} alt="Arrow Back" />
        </button>
      </div>
    </nav>
  );
}
