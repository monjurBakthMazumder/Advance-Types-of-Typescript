{
  //

  // Type assertion / type narrowing
  let anything: any;

  anything = "Md Monjur Bakth Mazumder";
  const length = (anything as string).length;
  console.log({ length });

  // Type assertion / type narrowing
  const KgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const ConvertedValue = parseFloat(value) * 1000;
      return `The converted value is ${ConvertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = KgToGm(1000) as number;
  console.log({ result1 });
  const result2 = KgToGm("1000") as string;
  console.log({ result2 });

  //
}
