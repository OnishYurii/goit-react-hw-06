import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { SearchBox } from './SearchBox/SearchBox';
import { ContactList } from './ContactList/ContactList';

const getInitialValues = () => {
  const savedValues = window.localStorage.getItem('saved-contacts');
  if (savedValues !== null) {
    return JSON.parse(savedValues);
  }

  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

export const App = () => {
  const [nameFilter, setNameFilter] = useState('');

  const [contacts, setContacts] = useState(getInitialValues);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const addContact = newContact => {
    setContacts(actualContacts => {
      return [...actualContacts, newContact];
    });
  };

  const deleteContacts = contactId => {
    setContacts(actualContacts => {
      return actualContacts.filter(contact => contact.id !== contactId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={nameFilter} onChange={setNameFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContacts} />
    </div>
  );
};

export default App;
