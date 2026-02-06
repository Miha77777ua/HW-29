export const addContact = (contact) => {
  return {
    type: "contacts/addContact",
    payload: contact,
  }
};

export const deleteContact = (name) => {
  return {
    type: "contacts/deleteContact",
    payload: name,
  }
};

export const updateContacts = {
  type: "contacts/updateContacts",
  payload: "contacts",
};

export const changeFilter = (value) => {
  return {
    type: "filter/changeFilter",
    payload: value,
  }
};
