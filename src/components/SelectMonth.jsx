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
    <nav className="flex w-full items-center justify-center gap-1">
      <div className="flex justify-center">
        <button onClick={handlerBack}>
          <img width={18} height={18} src={arrowBack} alt="Arrow Back" />
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <small className="text-center">{mounth.name}</small>
      </div>
      <div className="flex">
        <button onClick={handlerNext}>
          <img width={18} height={18} src={arrowForward} alt="Arrow Back" />
        </button>
      </div>
    </nav>
  );
}
