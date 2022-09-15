import { createContext, FC, PropsWithChildren } from 'react';

interface Bottle {
  title: string;
}

const AppContext = createContext<Bottle[]>([]);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const bottles: Bottle[] = [
    {
      title: 'teste',
    },
  ];

  return <AppContext.Provider value={bottles}>{children}</AppContext.Provider>;
};
