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
    <nav className="flex  items-center justify-center gap-4 p-2  border-2  rounded-md bg-red-600">
      <button onClick={handlerClickBack}>
        <img src={arrowBack} alt="Arrow Back" />
      </button>
      <div className="flex flex-col items-center">
        <span>Week</span>
        <strong>{countWeek + 1}</strong>
      </div>
      <button onClick={handlerClickForward}>
        <img src={arrowForward} alt="Arrow Back" />
      </button>
    </nav>
  );
}
