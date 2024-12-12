{
  //

  // Mapped types

  const arrOfNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const arrOfStringManually: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  const arrOfString: string[] = arrOfNumber.map((number) => number.toString());
  console.log({ arrOfString });

  type AreaNumber = {
    hight: number;
    width: number;
  };
  type Hight = AreaNumber["hight"];
  type AreaStringManually = {
    hight: string;
    width: string;
  };

  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  type AreaGeneric<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaGeneric<{
    hight: string;
    width: number;
  }> = {
    hight: "100",
    width: 100,
  };

  //
}
