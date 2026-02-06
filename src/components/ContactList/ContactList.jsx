import { useSelector } from "react-redux";
import { Contact } from "./Contact/Contact";
import style from "./ContactList.module.scss";

export function ContactList({ handleDelete }) {
  const contacts = useSelector(store => store.contacts);
  const filter = useSelector(store => store.filter);

  return (
    <>
      {contacts[0] === undefined
        ? <p className={style.none}>No contacts!</p>
        : <ul className={style.contacts}>
          {contacts.filter(el => {
            if (filter !== "") {
              return el.name.toLowerCase().includes(filter.toLowerCase());
            } else {
              return true;
            }
          }).map((el, id) => (
            <Contact name={el.name} number={el.number} key={id} handleDelete={handleDelete} />
          ))}
        </ul>}
    </>
  )
}
