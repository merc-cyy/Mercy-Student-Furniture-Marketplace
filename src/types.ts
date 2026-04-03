// define our database types
export interface Listing {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  furnitureType: string;
  condition: string;
  location: string;
  deliveryMethod: string;
  userId: string;
  createdAt: number;
}

export interface DBResponse {
  status: number;
  message: string;
}
