import { createContext, FC, PropsWithChildren, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { ProductProps, ProductContextProps } from './types';

export const ProductContext = createContext<ProductContextProps>({ products: [], addNewProduct: () => {} });

export const ProductContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState(getDummyData(6));

  const addNewProduct = (product: ProductProps): void => {
    setProducts([...products, { ...product, id: uuid() }]);
  };

  return <ProductContext.Provider value={{ products, addNewProduct }}>{children}</ProductContext.Provider>;
};

const getDummyData = (total: number): ProductProps[] => {
  return Array(total)
    .fill({
      title: 'Robert Stein',
      description: 'Mudgee Merlot',
      image: 'https://www.campoluzenoteca.com/6219-thickbox_default/mauro-2020.jpg',
    })
    .map((product) => ({ ...product, id: uuid() }));
};
