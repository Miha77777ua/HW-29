import { nanoid } from "nanoid";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filtration } from "./components/Filtration/Filtration";
import style from "./App.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateContacts, addContact, deleteContact, changeFilter } from "./redux/actions";

function App() {
  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateContacts("contacts"));
  }, []);

  const handleSubmit = (ev, clearState) => {
    ev.preventDefault();

    if (
      contacts.find(el =>
        el.name === ev.target.elements.name.value || el.number === ev.target.elements.number.value)
    ) {
      alert("Can't add user with same contact data!");
      return;
    }

    const newContact = { id: nanoid(), name: ev.target.elements.name.value, number: ev.target.elements.number.value };

    dispatch(addContact(newContact));

    clearState();
  }

  const handleDelete = (ev) => {
    dispatch(deleteContact(ev.target.parentElement.dataset.name));
  }

  const handleFiltration = (ev) => {
    dispatch(changeFilter(ev.target.value));
  }

  return (
    <>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2 className={style["contact-title"]}>Contacts</h2>
      <Filtration handleFiltration={handleFiltration} />
      <ContactList handleDelete={handleDelete} />
    </>
  );
}

export default App;
