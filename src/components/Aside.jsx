import Menu from "./Menu";
import SelectMonth from "./SelectMonth";
import TotalBalance from "./TotalBalance";

export default function Aside() {
  return (
    <aside className="flex items-center p-4 bg-[#EC765C] rounded-xl">
      <TotalBalance />
      <article className="flex flex-1 items-end flex-col gap-4">
        <SelectMonth />
        <Menu />
      </article>
    </aside>
  );
}
