import style from "./Contact.module.scss";

export function Contact({ name, number, handleDelete }) {
  return (
    <li className={style.contacts__item} data-name={name}>
      <p className={style.contacts__info}>{name}: {number}</p>
      <button className={style.contacts__delete} onClick={handleDelete}>Delete</button>
    </li>
  );
}
