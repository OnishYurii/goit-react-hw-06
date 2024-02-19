import { useId } from 'react';
import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  const filterId = useId();

  return (
    <div className={css.bar}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" value={value} onChange={evt => onChange(evt.target.value)} id={filterId} />
    </div>
  );
};
