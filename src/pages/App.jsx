import BarsChart from "../components/BarsChart";
import TotalBalance from "../components/TotalBalance";

export default function App() {
  return (
    <>
      <aside className="p-2">
        <TotalBalance />
      </aside>
      <article className="flex flex-col items-center justify-center bg-white rounded-xl p-4 gap-4">
        <h2 className="text-xl md:text-2xl text-stone-900 font-extrabold">
          Gastos - Última semana
        </h2>
        <BarsChart />
      </article>
    </>
  );
}
