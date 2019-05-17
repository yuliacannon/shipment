export class LocationType {
  id: IdType;
  name: string;
  code: string;
}

export class Port {
  id?: IdType;
  name: string;
  address: string;
  country: string;
}

export class Pier {
  id?: IdType;
  port: string;
  maxAmount: number;
  minSubmersion: number;
}
