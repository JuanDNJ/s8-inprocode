import arrowBack from "../assets/arrow_back.svg";
import arrowForward from "../assets/arrow_forward.svg";
import { useTranslation } from "react-i18next";
import { incrementWeek, decrementWeek } from "../store/slices/balance";
import { getDispacth, getSelector } from "../store";

export default function Menu() {
  const { current_date, countMonth, countWeek, bills } = getSelector(state => state.balance_sheets)
  const dispatch = getDispacth()
  const current_year = Object.values(bills[current_date.year])
  const month = current_year[countMonth]
  const weeks = Object.keys(month)
  const { t } = useTranslation();

  const handlerClickBack = () => {
    if (countWeek === 0) return
    dispatch(decrementWeek())
  };
  const handlerClickForward = () => {
    if (countWeek >= weeks.length - 1) return
    dispatch(incrementWeek())
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

    </nav>
  );
}
