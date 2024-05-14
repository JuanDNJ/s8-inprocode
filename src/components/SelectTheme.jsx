import { themes } from "../config";
import { useTheme } from "../hooks/theme";
import { getDispacth } from "../store";
import { selectTheme } from "../store/slices/theme";

export default function SelectTheme() {
  const { changeTheme } = useTheme();

  const dispatch = getDispacth();
  const handlerTheme = (id) => {
    changeTheme(id);
    dispatch(selectTheme({ id: id }));
  };
  return (
    <nav className="flex gap-2 justify-end">
      <button
        className="relative w-10 h-6 rounded-md border-2 border-stone-400"
        onClick={() => handlerTheme(0)}
      >
        <span
          className={`absolute left-0 top-0 ${themes[0].backgroundColor} p-2 w-full h-full`}
        ></span>
      </button>
      <button
        className="relative w-10 h-6 rounded-md border-2 border-stone-400"
        onClick={() => handlerTheme(1)}
      >
        <span
          className={`absolute left-0 top-0 ${themes[1].backgroundColor} p-2 w-full h-full`}
        ></span>
      </button>
      <button
        className="relative w-10 h-6 rounded-md border-2 border-stone-400"
        onClick={() => handlerTheme(2)}
      >
        <span
          className={`absolute left-0 top-0 ${themes[2].backgroundColor} p-2 w-full h-full`}
        ></span>
      </button>
    </nav>
  );
}
