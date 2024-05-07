import arrowBack from "../assets/arrow_back.svg";
import arrowForward from "../assets/arrow_forward.svg";
export default function Menu() {
  return (
    <nav className="flex items-center justify-center gap-4 p-2">
      <button>
        <img src={arrowBack} alt="Arrow Back" />
      </button>
      <button>
        <img src={arrowForward} alt="Arrow Back" />
      </button>
    </nav>
  );
}
