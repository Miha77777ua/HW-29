import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { Filtration } from "./components/Filtration/Filtration";
import style from "./App.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, addContact, deleteContact } from "./redux/operations";
import { changeFilter } from "./redux/filterSlice";

function App() {
  const { items, isLoading, error } = useSelector(store => store.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const handleSubmit = (ev, clearState) => {
    ev.preventDefault();

    if (
      items.find(el =>
        el.name === ev.target.elements.name.value || el.number === ev.target.elements.number.value)
    ) {
      alert("Can't add user with same contact data!");
      return;
    }

    const newContact = { id: items[0] && items[items.length - 1].id + 1 || 1, name: ev.target.elements.name.value, number: ev.target.elements.number.value };

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
      {isLoading && <b>Loading tasks...</b> || <ContactList handleDelete={handleDelete} />}
      {error && <b>{error}</b>}
    </>
  );
}

export default App;
