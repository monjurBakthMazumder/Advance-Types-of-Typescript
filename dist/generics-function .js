"use strict";
{
    //
    //Function with generics
    const createArray = (param) => {
        return [param];
    };
    console.log(createArray("Bangladesh"));
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const result1 = createArrayWithGeneric("Bangladesh");
    const result2 = createArrayWithGeneric({
        name: "Md Monjur Bakth Mazumder",
        age: 23,
    });
    const createTupleWithGeneric = (param1, param2) => {
        return [param1, param2];
    };
    const result3 = createTupleWithGeneric("Bangladesh", 23);
    const result4 = createTupleWithGeneric("Bangladesh", {
        name: "Md Monjur Bakth Mazumder",
        age: 23,
    });
    const addCourseToStudent = (student) => {
        const course = "Next level wen development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        name: "Md Monjur Bakth Mazumder",
        age: 23,
    });
    const student2 = addCourseToStudent({
        name: "Md Monjur",
        age: 53,
    });
    //
}
