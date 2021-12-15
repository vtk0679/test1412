import { Cart } from "components/Cart";
import s from "./Favorites.module.css";

export function Favorites({ meals }) {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {meals.map((meal) => (
          <li key={meal.id} className={s.item}>
            <Cart recipe={meal}></Cart>
          </li>
        ))}
      </ul>
    </div>
  );
}
