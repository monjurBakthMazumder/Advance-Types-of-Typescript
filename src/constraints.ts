{
  //
  // Constraints in typescript
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next level wen development";
    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    age: number;
    bike: boolean;
  }>({
    id: 23,
    name: "Md Monjur Bakth Mazumder",
    email: "monjur@gmail.com",
    age: 23,
    bike: true,
  });
  const student2 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    age: number;
  }>({
    id: 24,
    name: "Md Monjur",
    email: "monjur@gmail.com",
    age: 53,
  });

  //
}
