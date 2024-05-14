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
    backgroundColor: "bg-stone-50",
    backgroundColorbars: "gray",
  },
  {
    name: "Dark",
    backgroundColor: "bg-stone-800",
    backgroundColorbars: "white",
  },
  {
    name: "Blue",
    backgroundColor: "bg-blue-500",
    backgroundColorbars: "#333",
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
