import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';

export const Contact = ({ item: { name, number, id }, onDelete }) => {
  return (
    <div className={css.contactForm}>
      <h2 className={css.text}>
        <IoPerson />
        {name}
      </h2>
      <p className={css.text}>
        <FaPhone />
        {number}
      </p>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
