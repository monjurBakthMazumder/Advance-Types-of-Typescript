{
  //

  // type vs interface

  //type
  type TUser = {
    name: string;
    age: number;
  };
  const userT1: TUser = {
    name: "Md Monjur Bakth Mazumder",
    age: 23,
  };
  console.log({ userT1 });

  type TUserWithRoll = TUser & { role: string };
  const userT2: TUserWithRoll = {
    name: "Md Monjur Bakth Mazumder",
    age: 23,
    role: "Admin",
  };
  console.log({ userT2 });

  //Interface
  interface IUser {
    name: string;
    age: number;
  }
  const userI1: IUser = {
    name: "Md Monjur Bakth Mazumder",
    age: 23,
  };
  console.log({ userI1 });

  interface IUserWithRoll extends IUser {
    role: string;
  }
  const userI2: IUserWithRoll = {
    name: "Md Monjur Bakth Mazumder",
    age: 23,
    role: "Admin",
  };
  console.log({ userI2 });

  // js --> object , array --> object, function --> object
  type TROll = number[];
  const rollT: TROll = [23, 43, 54, 6, 8, 56, 6];
  console.log({ rollT });

  interface IRoll {
    [index: number]: number;
  }
  const rollI: IRoll = [23, 43, 54, 6, 8, 56, 6];
  console.log({ rollI });

  interface IName {
    [index: number]: string;
  }
  const nameI: IName = ["a", "b", "c", "d", "e", "f"];
  console.log({ nameI });

  // function
  type TAdd = (num1: number, num2: number) => number;

  interface IAdd {
    (num1: number, num2: number): number;
  }
  const add1: TAdd = (num1, num2) => num1 + num2;
  console.log({ add1 });
  const add2: IAdd = (num1, num2) => num1 + num2;
  console.log({ add2 });

  //
}
