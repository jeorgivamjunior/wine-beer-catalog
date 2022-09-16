import '@fontsource/roboto';

import { FC } from 'react';

import { CssBaseline } from '@mui/material';

import { Header } from './components';
import { ProductContextProvider } from './contexts';
import { Products } from './pages';

export const App: FC = () => {
  return (
    <ProductContextProvider>
      <CssBaseline />
      <Header />
      <Products />
    </ProductContextProvider>
  );
};
