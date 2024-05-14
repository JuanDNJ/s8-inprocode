import catPng from "./assets/cat.png";
import esPng from "./assets/es.png";
import enPng from "./assets/en.png";
import { getCurrentDay, getCurrentMounth, getCurrentWeek } from "./utils";
export const currentMonth = getCurrentMounth();
export const currentWeek = getCurrentWeek();
export const currentDay = getCurrentDay();
export const URL_FIEREBASE_DATA_BASE =
  "https://s8-inprocode-default-rtdb.europe-west1.firebasedatabase.app/balance";
export const URL_MOUTHS =
  " https://s8-inprocode-default-rtdb.europe-west1.firebasedatabase.app/mounths";
export const themes = [
  {
    name: "Light",
    backgroundColor: "bg-white",
    backgroundTotalBalance: "bg-[#EC765C]",
    backgroundColorBars: "#EC765C",
    borderColorBars: "black",
    textColorBars: "text-stone-900",
  },
  {
    name: "Dark",
    backgroundColor: "bg-stone-900",
    backgroundTotalBalance: "bg-[skyblue]",
    backgroundColorBars: "skyblue",
    borderColorBars: "white",
    textColorBars: "text-stone-50",
  },
  {
    name: "Blue",
    backgroundColor: "bg-orange-200",
    backgroundTotalBalance: "bg-[orange]",
    backgroundColorBars: "orange",
    borderColorBars: "#EC765C",
    textColorBars: "text-stone-900",
  },
];
export const flags = [
  {
    key: "es",
    language: "Español",
    img: esPng,
  },
  {
    key: "en",
    language: "Ingles",
    img: enPng,
  },
  {
    key: "cat",
    language: "Catalan",
    img: catPng,
  },
];
