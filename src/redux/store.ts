import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Slice from './SlicesNThunk/Pizzass/Slice';

const store = combineReducers({
  fetchPizzassSlice: Slice,
});

const data = configureStore({
  reducer: { store },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof data.getState>;
export type AppDispatch = typeof data.dispatch;
export default data;
