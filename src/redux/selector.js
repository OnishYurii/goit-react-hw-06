export const selectFilteredContacts = state => {
  if (state.filters.name.trim() === '') {
    return state.contacts.items;
  } else {
    const filteredContacts = state.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(state.filters.name.toLowerCase())
    );
    return filteredContacts;
  }
};

export const getFilter = state => state.filters.name;
