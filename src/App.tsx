import { FC } from 'react';

import { RouterProvider } from 'react-router-dom';

import { Header } from './components';
import { AppContextProvider } from './contexts';
import { router } from './routes';

export const App: FC = () => {
  return (
    <AppContextProvider>
      <Header />
      <RouterProvider router={router} />
    </AppContextProvider>
  );
};
