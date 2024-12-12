{
  //

  // generics type
  const rollNumber: number[] = [1, 2, 3, 4, 5];
  const mentors: string[] = ["a", "b", "c", "d", "e", "f", "g"];
  const oolArray: boolean[] = [true, false, false];

  const rollNumber2: Array<number> = [1, 2, 3, 4, 5];
  const mentors2: Array<string> = ["a", "b", "c", "d", "e", "f", "g"];
  const oolArray2: Array<boolean> = [true, false, false];

  // generics type
  type GenericArray<T> = Array<T>;
  const rollNumber3: GenericArray<number> = [1, 2, 3, 4, 5];
  const mentors3: GenericArray<string> = ["a", "b", "c", "d", "e", "f", "g"];
  const oolArray3: GenericArray<boolean> = [true, false, false];

  // generics type object
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "monjur",
      age: 23,
    },
    {
      name: "mazumder",
      age: 32,
    },
  ];
  // generics type tuple
  type GenericTuple<X, Y> = [X, Y];
  const Human: GenericTuple<string, number> = ["monjur", 23];
  //
}
