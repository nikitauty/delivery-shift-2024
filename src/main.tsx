import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { getUsersSession } from '@api/requests/users/session/index.ts';

import { App } from './app/App.tsx';
import { TanStackQueryProvider } from './app/providers/TanStackQueryProvider';

import '@/app/styles/index.css';
const init = async () => {
  const token = localStorage.getItem('AUTH_TOKEN');

  if (token) {
    const getUsersSessionResponse = await getUsersSession();

    const user = { isLoggedIn: true, ...getUsersSessionResponse.data.user };

    console.log(user);
  }

  createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <TanStackQueryProvider>
          <App />
        </TanStackQueryProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

init();
