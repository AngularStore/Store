export interface Product {
  productID: number;
  productName: string;
  description: string;
  price: number;
  productImages: Image[];
}

export interface Image {
  imageID: number;
  productID: number;
  isFront: boolean;
  imageURL: string;
}
