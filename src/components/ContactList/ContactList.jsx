import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/selector';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact item={contact} />
        </li>
      ))}
    </ul>
  );
};
