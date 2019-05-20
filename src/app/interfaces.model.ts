export class Port {
  id?: IdType;
  name: string;
  address: string;
  country: string;
}

export class Pier {
  id?: IdType;
  port: any;
  maxAmount: number;
  minSubmersion: number;
}

export class Ship {
  id?: IdType;
  pier: any;
  name: string;
  tonnage: number;
  country: number;
  submersion: number;
}
