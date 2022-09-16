export interface ProductProps {
  title: string;
  description: string;
  image: string;
}

export interface ProductContextProps {
  products: ProductProps[];
  product: ProductProps;
}
