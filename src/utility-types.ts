{
  //
  // Utility types

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  type ContactInfo = Omit<Person, "name" | "age">;

  type PersonRequired = Required<Person>;

  type PersonPartial = Partial<Person>;

  type PersonReadonly = Readonly<Person>;

  type MyObj = Record<string, string>;
  const obj: MyObj = {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
  };

  let EmptyObject: Record<string, unknown> = {};
  EmptyObject = {
    name: "Monjur",
    age: 23,
    isAdmin: true,
  };

  //
}
