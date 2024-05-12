import { useTranslation } from "react-i18next";
import Flag from "./Flag";

export default function ChangeLanguage() {
  const { i18n } = useTranslation();

  const hanlderChangelanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <nav className="flex gap-2">
      <button
        onClick={() => hanlderChangelanguage("en")}
        className="rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        <Flag language="en" />
      </button>
      <button
        onClick={() => hanlderChangelanguage("es")}
        className="rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        <Flag language="es" />
      </button>
      <button
        onClick={() => hanlderChangelanguage("cat")}
        className="rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        <Flag language="cat" />
      </button>
    </nav>
  );
}
