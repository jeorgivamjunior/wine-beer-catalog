import { FC } from 'react';

import { Header } from './components';
import { AppContextProvider } from './contexts';

export const App: FC = () => {
  return (
    <AppContextProvider>
      <Header />
      <Routes />
    </AppContextProvider>
  );
};
