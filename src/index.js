import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './app/store';
import './index.css';
import {createRoot} from "react-dom/client";

const theme = createTheme({});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeProvider>
  </Provider>
);
