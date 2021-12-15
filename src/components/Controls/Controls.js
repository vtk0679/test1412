import s from "./Controls.module.css";

export function Controls({ onSkip, onLike }) {
  return (
    <div className={s.controls}>
      <button className={s.button} onClick={onSkip}>
        Skip
      </button>
      <button className={s.button} onClick={onLike}>
        Like
      </button>
    </div>
  );
}
