import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="flex items-center justify-center gap-4 p-2">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
