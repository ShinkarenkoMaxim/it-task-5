export interface Account {
  num: number;
  id: number;
  fullName: string;
  address: string;
  phoneNumber: string;
}

export interface AccountForm {
  country: string;
  errorsCount: any;
  seed: any;
}
