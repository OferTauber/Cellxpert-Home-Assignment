import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LetterStateProvider } from './utils/use_letters_state.hook';
import 'semantic-ui-css/semantic.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LetterStateProvider>
      <App />
    </LetterStateProvider>
  </React.StrictMode>
);
