{
  //
  //Function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  console.log(createArray("Bangladesh"));

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const result1 = createArrayWithGeneric<string>("Bangladesh");

  interface IUser {
    name: string;
    age: number;
  }
  const result2 = createArrayWithGeneric<IUser>({
    name: "Md Monjur Bakth Mazumder",
    age: 23,
  });

  const createTupleWithGeneric = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const result3 = createTupleWithGeneric<string, number>("Bangladesh", 23);
  const result4 = createTupleWithGeneric<string, IUser>("Bangladesh", {
    name: "Md Monjur Bakth Mazumder",
    age: 23,
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level wen development";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent<IUser>({
    name: "Md Monjur Bakth Mazumder",
    age: 23,
  });
  const student2 = addCourseToStudent<IUser>({
    name: "Md Monjur",
    age: 53,
  });

  //
}
