import { createContext, FC, PropsWithChildren } from 'react';

interface Product {
  title: string;
  description: string;
  image: string;
}

interface productContext {
  products: Product[];
  product: Product;
}

export const ProductContext = createContext<Partial<productContext>>({});

export const ProductContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const products: Product[] = [
    {
      title: 'Robert Stein',
      description: 'Mudgee Merlot',
      image: 'https://www.campoluzenoteca.com/6219-thickbox_default/mauro-2020.jpg',
    },
    {
      title: 'Robert Stein',
      description: 'Mudgee Merlot',
      image: 'https://www.campoluzenoteca.com/6219-thickbox_default/mauro-2020.jpg',
    },
    {
      title: 'Robert Stein',
      description: 'Mudgee Merlot',
      image: 'https://www.campoluzenoteca.com/6219-thickbox_default/mauro-2020.jpg',
    },
    {
      title: 'Robert Stein',
      description: 'Mudgee Merlot',
      image: 'https://www.campoluzenoteca.com/6219-thickbox_default/mauro-2020.jpg',
    },
    {
      title: 'Robert Stein',
      description: 'Mudgee Merlot',
      image: 'https://www.campoluzenoteca.com/6219-thickbox_default/mauro-2020.jpg',
    },
    {
      title: 'Robert Stein',
      description: 'Mudgee Merlot',
      image: 'https://www.campoluzenoteca.com/6219-thickbox_default/mauro-2020.jpg',
    },
  ];

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};
