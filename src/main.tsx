import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { getUsersSession } from '@api/requests/users/session/index.ts';

import { App } from './app/App.tsx';
import { TanStackQueryProvider } from './app/providers/TanStackQueryProvider';
import { AUTH_TOKEN } from './shared/constants/localstorage.ts';
import { useUserStore } from './shared/store/hooks/useUserStore.ts';

import '@/app/styles/index.css';
const init = async () => {
  const token = localStorage.getItem(AUTH_TOKEN);

  if (token) {
    const getUserResponse = await getUsersSession();
    useUserStore.setState({ isLoggedIn: true, user: getUserResponse.data.user });
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
