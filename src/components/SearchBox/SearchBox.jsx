import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/filtersSlicer';

export const SearchBox = () => {
  const filterId = useId();
  const dispatch = useDispatch();
  const nameFilter = useSelector(state => state.filters.name);

  return (
    <div className={css.bar}>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        value={nameFilter}
        onChange={evt => dispatch(filterContact(evt.target.value))}
        id={filterId}
      />
    </div>
  );
};
