import { useSelector } from "react-redux";
import { getDispacth } from "../store";
import { monthAmount, monthDiscount } from "../store/slices/counter";
import arrowBack from "../assets/arrow_back.svg";
import arrowForward from "../assets/arrow_forward.svg";
export default function SelectMonth() {
  const dispatch = getDispacth();
  const { countMonth } = useSelector((state) => state.counter);
  const { mounth, mounthsCount } = useSelector((state) => state.balance);
  const handlerBack = () => {
    if (countMonth === 0) return;
    dispatch(monthDiscount());
  };
  const handlerNext = () => {
    if (countMonth >= mounthsCount) return;
    dispatch(monthAmount());
  };

  return (
    <nav className="flex items-center justify-center gap-4 p-2 bg-red-600 border-2 rounded-md">
      <button onClick={handlerBack}>
        <img src={arrowBack} alt="Arrow Back" />
      </button>
      {mounth && <strong>{mounth.name}</strong>}
      <button onClick={handlerNext}>
        <img src={arrowForward} alt="Arrow Back" />
      </button>
    </nav>
  );
}
