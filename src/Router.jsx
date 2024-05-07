import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import About from "./pages/About";
import Header from "./components/Header";

export default function Router() {
  return (
    <section className="flexh-screen max-w-2xl h-screen m-auto text-stone-200 flex flex-col gap-4">
      <BrowserRouter>
        <Header />
        <section className="flex flex-col gap-8 p-4">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </section>
      </BrowserRouter>
    </section>
  );
}
