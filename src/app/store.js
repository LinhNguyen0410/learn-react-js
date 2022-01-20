import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';

const rootReducer = {
  count: counterReducer,
};
// rootReducer sẽ bao gồm tất cả reducer mà mình có nhá

const store = configureStore({
  reducer: rootReducer,
});
export default store;
