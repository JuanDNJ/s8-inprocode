import { useTranslation } from "react-i18next";
import { themes } from "../config";

import { getDispacth, getSelector } from "../store";
import { selectTheme } from "../store/slices/theme";

export default function SelectTheme() {
  const { t } = useTranslation();
  const { theme } = getSelector((state) => state.theme);
  const dispatch = getDispacth();
  const handlerTheme = (id) => {
    dispatch(selectTheme({ id: id }));
  };
  return (
    <nav className="flex gap-2 justify-end">
      <section className="flex gap-4 items-center">
        <small className={`${theme.textColorBars} font-bold`}>
          {t("selectTheme")}
        </small>
        <article className="flex gap-1">
          <button
            className="relative w-10 h-6 rounded-lg overflow-hidden border-2 border-stone-400 hover:scale-95 transition-transform duration-300"
            onClick={() => handlerTheme(0)}
          >
            <span
              className={`absolute left-0 top-0  ${themes[0].backgroundColor} p-2 w-full h-full`}
            ></span>
          </button>
          <button
            className="relative w-10 h-6 rounded-lg overflow-hidden border-2 border-stone-400 hover:scale-95 transition-transform duration-300"
            onClick={() => handlerTheme(1)}
          >
            <span
              className={`absolute left-0 top-0 ${themes[1].backgroundColor} p-2 w-full h-full`}
            ></span>
          </button>
          <button
            className="relative w-10 h-6 rounded-lg overflow-hidden border-2 border-stone-400 hover:scale-95 transition-transform duration-300"
            onClick={() => handlerTheme(2)}
          >
            <span
              className={`absolute left-0 top-0 ${themes[2].backgroundColor} p-2 w-full h-full`}
            ></span>
          </button>
        </article>
      </section>
    </nav>
  );
}
