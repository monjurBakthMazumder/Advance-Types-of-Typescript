{
  //

  // Asynchronous typescript

  // promise
  const CreatePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("Something went wrong");
      }
    });
  };

  // calling create promise function
  const showData = async (): Promise<string> => {
    const data: string = await CreatePromise();
    console.log({ data });
    return data;
  };
  showData();

  //
}
