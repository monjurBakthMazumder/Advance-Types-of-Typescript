"use strict";
{
    //
    // Constraints in typescript
    const addCourseToStudent = (student) => {
        const course = "Next level wen development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({
        id: 23,
        name: "Md Monjur Bakth Mazumder",
        email: "monjur@gmail.com",
        age: 23,
        bike: true,
    });
    const student2 = addCourseToStudent({
        id: 24,
        name: "Md Monjur",
        email: "monjur@gmail.com",
        age: 53,
    });
    //
}
