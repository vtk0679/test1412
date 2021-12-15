import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { v4 } from "uuid";

import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export function Modal({ handleClose, handleAdd }) {
  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "visible";
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onBackdropClick = (e) => {
    if (e.currentTarget === e.target) handleClose();
  };

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      handleClose();
    }
  };

  const onDescrChange = (e) => {
    const newLetter = e.nativeEvent.data;
    setDescr((oldDescr) => oldDescr + newLetter);
  };

  const onNameChange = (e) => {
    const newLetter = e.nativeEvent.data;
    setName((oldName) => oldName + newLetter);
  };

  const onAddClick = () => {
    if (name.length === 0) {
      alert("Please add recipe title");
      return;
    }
    if (descr.length === 0) {
      alert("Please add recipe description");
      return;
    }
    handleAdd({ name, description: descr, id: v4() });
    handleClose();
  };

  return createPortal(
    <div onClick={onBackdropClick} className={s.overlay}>
      <div className={s.modalCart}>
        <h2 className={s.title}>Add custom dish</h2>
        <div className={s.inputs}>
          <input
            onChange={onNameChange}
            className={s.name}
            placeholder="Dish title"
          ></input>
          <textarea
            onChange={onDescrChange}
            className={s.descr}
            placeholder="Dish description..."
          ></textarea>
          <button onClick={onAddClick} className={s.add}>
            Add custom dish
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
