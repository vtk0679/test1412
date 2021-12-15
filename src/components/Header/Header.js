import { NavLink } from "react-router-dom";

import s from "./Header.module.css";

export function Header({ onOpenModal }) {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <nav className={s.mainNav}>
          <NavLink className={s.navLink} to="/">
            Random dish
          </NavLink>
          <NavLink className={s.navLink} to="favorites">
            Favorites
          </NavLink>
        </nav>
        <button onClick={onOpenModal} className={s.addButton}>
          Add custom dish
        </button>
      </div>
    </header>
  );
}
