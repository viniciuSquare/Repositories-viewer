import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { RepositoriesContextProvider } from './contexts/RepositoriesContext';

ReactDOM.render(
  <React.StrictMode>
    <RepositoriesContextProvider>
      <App />
    </RepositoriesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);