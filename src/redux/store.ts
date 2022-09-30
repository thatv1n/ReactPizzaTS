import { configureStore, combineReducers } from '@reduxjs/toolkit';
import PizzaSlice from './SlicesNThunk/Pizzass/PizzaSlice';

const store = combineReducers({
  fetchPizzassSlice: PizzaSlice,
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
