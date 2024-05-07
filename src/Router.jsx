import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";
import Menu from "./components/Menu";

export default function Router() {
  return (
    <section className="bg-stone-800 h-screen max-w-7xl m-auto text-stone-200 flex flex-col gap-4 ">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}
