import Flag from "./Flag";

export default function ChangeLanguage() {
  return (
    <nav className="flex gap-2 p-4">
      <button className="rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
        <Flag language="en" />
      </button>
      <button className="rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
        <Flag language="es" />
      </button>
      <button className="rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
        <Flag language="cat" />
      </button>
    </nav>
  );
}
