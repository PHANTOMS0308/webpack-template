import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.querySelector('#root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App name='Shen' />
  </React.StrictMode>
);
