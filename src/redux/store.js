import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlicer';
import { filtersReducer } from './filtersSlicer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
