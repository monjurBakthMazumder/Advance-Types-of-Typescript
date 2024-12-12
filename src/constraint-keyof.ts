{
  //

  //Constraint using key of

  type TVehicle = {
    bike: string;
    car: string;
    shop: string;
  };

  type TOwen = "bike" | "car" | "shop"; // manually

  type TOwen2 = keyof TVehicle; // "bike" | "car" | "shop";
  const person: TOwen = "bike";
  const person2: TOwen2 = "bike";

  const user = {
    name: "Md Monjur",
    age: 23,
    address: "BD",
  };

  const getPropertyWithValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const result1 = getPropertyWithValue(user, "name");

  //
}
