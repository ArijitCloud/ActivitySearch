export interface Activity  {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly currency: string;
  readonly rating: number;
  readonly specialOffer: boolean;
  readonly supplierId: number;
};
