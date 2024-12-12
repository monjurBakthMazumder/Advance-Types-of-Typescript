"use strict";
{
    //
    // Mapped types
    const arrOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arrOfStringManually = [
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
    const arrOfString = arrOfNumber.map((number) => number.toString());
    console.log({ arrOfString });
    const area1 = {
        hight: "100",
        width: 100,
    };
    //
}
