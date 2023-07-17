export interface IAdress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAdress;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}