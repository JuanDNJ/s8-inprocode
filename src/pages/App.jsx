import reackIcon from "../assets/react.svg";
import Counter from "../components/Counter";
export default function App() {
  const helloWord = "Hello Word!";

  return (
    <article className="flex flex-col items-center justify-center h-[768px] gap-8">
      <h2 className="text-7xl text-pink-500 font-bold">{helloWord}</h2>
      <img src={reackIcon} width={96} height={96} alt="Icon" />
      <Counter />
    </article>
  );
}
