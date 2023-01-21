export interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number | undefined;
  price: number | undefined;
  sku: number | undefined;
}
