export interface Ipass{
    id: string;
    fullName: string;
    checkedIn: boolean;
    checkInDate: number;
    children: null | Ichildren[];
}


   export interface Ichildren {
      fName:string,
      age:number
}