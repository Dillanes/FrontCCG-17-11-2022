import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LoginProvider } from './Context/LoginContext';

//vincular Redux
import { Provider } from 'react-redux'
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <Provider store={store}>
          <BrowserRouter>
            <LoginProvider>
              <App />
            </LoginProvider>
          </BrowserRouter>
      </Provider>
    );


