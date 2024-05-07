import { useDispatch, useSelector } from "../store";
import { discount, increase } from "../store/slices/counter";
export default function Counter() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4 ring-1 ring-white p-4 rounded-lg">
      <h2 className="text-2xl text-yellow-500 font-bold">
        Using redux toolkit
      </h2>
      <div className="flex justify-center">
        <strong className="text-xl ring-2 ring-red-700 size-11 flex items-center justify-center  rounded-full">
          {count}
        </strong>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <button onClick={() => dispatch(increase())}>Add</button>
        <button onClick={() => (count <= 0 ? null : dispatch(discount()))}>
          Discount
        </button>
      </div>
    </div>
  );
}
