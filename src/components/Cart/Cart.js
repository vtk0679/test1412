import s from "./Cart.module.css";
import placeholderImg from "./Placeholder.jpg";

export function Cart({ recipe }) {
  const { name, description, img } = recipe;
  return (
    <div className={s.cart}>
      <div className={s.imgThumb}>
        <img
          className={s.img}
          src={img ? img : placeholderImg}
          alt={`Foto of: ${name}`}
        />
      </div>
      <h2 className={s.title}>{name}</h2>
      <p className={s.description}>{description}</p>
    </div>
  );
}
