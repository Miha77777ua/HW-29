import { useState } from "react";
import style from "./ContactForm.module.scss";

export function ContactForm({ handleSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  }

  const handleNumberChange = (ev) => {
    setNumber(ev.target.value);
  }

  const clearState = () => {
    setName("");
    setNumber("");
  }

  return (
    <form className={style.form} onSubmit={(ev) => handleSubmit(ev, clearState)}>
      <label htmlFor="name" className={style.form__label}>Name</label>
      <input
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="name"
        className={style.form__input}
        value={name}
        onChange={handleNameChange}
        maxLength={10}
      />
      <label htmlFor="number" className={style.form__label}>Number</label>
      <input
        type="tel"
        name="number"
        title="Number matches pattern 241-318-2393"
        required
        id="number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        className={style.form__input}
        value={number}
        onChange={handleNumberChange}
        maxLength={25}
      />
      <button className={style.form__submit} type="submit">Add contact</button>
    </form>
  );
}
