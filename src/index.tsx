
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For collapse/accordion
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { privateRoutes } from './routes/route';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Provider } from 'react-redux';
import { createReduxStore } from './redux/store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { combineReducers } from '@reduxjs/toolkit';
import { UserAuthReducer } from './redux/reducer/auth.reducer';
import Toaster from './components/toaster/Toaster';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: privateRoutes
  },
]);

// combine reducers
const rootReducer = combineReducers({
  auth: UserAuthReducer,
});
const { store, persistor } = createReduxStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Toaster />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
