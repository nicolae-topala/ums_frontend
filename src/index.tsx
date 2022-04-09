import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { routes } from 'router';
import { RouterGenerator } from 'libs/RouterGenerator';

// Contexts
import { UserProvider } from 'context/UserContext';

// SCSS
import './styles/index.scss';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <UserProvider>
      <Router>
        <RouterGenerator routes={routes} />
      </Router>
    </UserProvider>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
