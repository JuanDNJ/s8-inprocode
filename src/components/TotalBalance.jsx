import Menu from "./Menu";

export default function TotalBalance() {
  return (
    <section className="flex items-center justify-between p-4 bg-[#EC765C] rounded-xl">
      <article className="flex flex-col">
        <h2 className="text-stone-200 font-bold">Balance Total</h2>
        <strong className="text-4xl text-center font-bold">3323 €</strong>
      </article>
      <article>
        <Menu />
      </article>
    </section>
  );
}
