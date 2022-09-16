export interface ProductProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ProductContextProps {
  products: ProductProps[];
  addNewProduct: (product: ProductProps) => void;
}
