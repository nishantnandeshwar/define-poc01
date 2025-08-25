import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { createRef } from 'react';
import { RootState } from '../../index';

export let storeRef: any;
export let persistor: any;

export const getReduxState = () => {
  return storeRef?.current?.getState() as RootState;
};

export function createReduxStore(reducers: any) {
  const persistConfig = {
    key: 'root',
    storage,
    // whitelist: [ ],
  };

  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        thunk: true,
        immutableCheck: false,
        serializableCheck: false,
      });
    },
  });

  storeRef = createRef();

  let persistor = persistStore(store);
  storeRef.current = store;

  return { store, persistor };
}