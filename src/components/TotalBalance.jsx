import Menu from "./Menu";

export default function TotalBalance() {
  return (
    <section className="flex items-center justify-between p-4 bg-red-500 rounded-xl">
      <article className="flex flex-col">
        <h2 className="font-bold">Balance Total</h2>
        <strong className="text-2xl text-center font-extrabold">3323 €</strong>
      </article>
      <article>
        <Menu />
      </article>
    </section>
  );
}
