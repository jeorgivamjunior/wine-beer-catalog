import { createContext, FC, PropsWithChildren, useId } from 'react';

import { ProductProps, ProductContextProps } from './types';

export const ProductContext = createContext<Partial<ProductContextProps>>({});

export const ProductContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const products: ProductProps[] = Array(6).fill({
    id: useId(),
    title: 'Robert Stein',
    description: 'Mudgee Merlot',
    image: 'https://www.campoluzenoteca.com/6219-thickbox_default/mauro-2020.jpg',
  });

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};
