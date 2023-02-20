import {configureStore} from '@reduxjs/toolkit';
import app from './Slice/app';

export const store = configureStore({
  reducer: {
    app,
  },
});
