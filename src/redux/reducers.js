const initialState = {
  contacts: [],
  filter: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      const newContacts = [...state.contacts, action.payload];

      localStorage.setItem("contacts", JSON.stringify(newContacts));

      return { ...state, contacts: newContacts, };
    case "contacts/deletContact":
      const redactedContacts = contacts.filter(el => el.name !== ev.target.parentElement.dataset.name);

      localStorage.setItem("contacts", JSON.stringify(redactedContacts));

      return { ...state, contacts: redactedContacts, };
    case "filter/changeFilter":
      return { ...state, filter: action.payload, };
    case "contacts/updateContacts":
      const localStorageContacts = JSON.parse(localStorage.getItem(action.payload)) || [];

      return { ...state, contacts: localStorageContacts, }
    default:
      return state;
  }
}
