export type ShippingDestination = {
    id: string;
    from: string;
    to: string;
    pricePerKg: number;
    minWeight: number;
    deliveryEstimate: string;
  }