import { Cart } from "components/Cart";
import { Controls } from "components/Controls";

import s from "./RandomRecipe.module.css";

export function RandomRecipe({ recipe, onSkip, onLike }) {
  return (
    <div className={s.container}>
      <Cart recipe={recipe}></Cart>
      <Controls onSkip={onSkip} onLike={() => onLike(recipe)}></Controls>
    </div>
  );
}
