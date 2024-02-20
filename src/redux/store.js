import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlicer';

export const store = configureStore({
  reducer: contactsReducer,
});
