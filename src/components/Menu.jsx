import arrowBack from "../assets/arrow_back.svg";
import arrowForward from "../assets/arrow_forward.svg";
import { useDispatch, useSelector } from "react-redux";

import {
  discount,
  increase,
  weekAmount,
  weekDiscount,
} from "../store/slices/counter";

export default function Menu() {
  const dispatch = useDispatch();
  const { countWeek } = useSelector((state) => state.counter);
  const { weeksCount } = useSelector((state) => state.balance);
  const handlerClickBack = () => {
    dispatch(discount());
    if (countWeek === 0) return;
    dispatch(weekDiscount());
  };
  const handlerClickForward = () => {
    dispatch(increase());
    if (countWeek >= weeksCount) return;
    dispatch(weekAmount());
  };

  return (
    <nav className="flex w-full items-center justify-center gap-1">
      <div className="flex justify-center">
        <button onClick={handlerClickBack}>
          <img width={18} height={18} src={arrowBack} alt="Arrow Back" />
        </button>
      </div>
      <div className="flex-1 gap-2 flex justify-center">
        <small>Week</small>
        <small>{countWeek + 1}</small>
      </div>
      <div className="flex">
        <button onClick={handlerClickForward}>
          <img width={18} height={18} src={arrowForward} alt="Arrow Back" />
        </button>
      </div>
    </nav>
  );
}
