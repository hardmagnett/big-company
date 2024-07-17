export interface IPosition {
  id: number;
  title: string;
}

export interface IEmployee {
  id: number;
  firstname: string;
  lastname: string;
  position: IPosition;
}
