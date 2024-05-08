import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";

import Header from "./components/Header";
import { Suspense } from "react";
import { getDispacth } from "./store";
import { getAllBalance } from "./store/thunks";

export default function Router() {
  const dispatch = getDispacth();
  return (
    <Suspense fallback={<h1>...Loading</h1>}>
      <section className="flexh-screen max-w-2xl h-screen m-auto text-stone-200 flex flex-col gap-4">
        <BrowserRouter>
          <Header />
          <section className="flex flex-col gap-8 p-4">
            <Routes>
              <Route
                path="/"
                element={<App />}
                loader={dispatch(getAllBalance())}
              />
            </Routes>
          </section>
        </BrowserRouter>
      </section>
    </Suspense>
  );
}
