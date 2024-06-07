export type Sunglasses = {
  UPC: string;
  availability: { stock: number };
  name: string;
  price: { current: { value: number}; currency: string };
};

