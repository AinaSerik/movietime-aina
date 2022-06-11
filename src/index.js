import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ToggleColorModeProvider from './utils/ToggleColorMode';
import App from './components/App';
import store from './app/store';
import './index.css';
import {createRoot} from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
<ToggleColorModeProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ToggleColorModeProvider>
  </Provider>
);
