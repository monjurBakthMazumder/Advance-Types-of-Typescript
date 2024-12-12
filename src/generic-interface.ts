{
  //
  // Generic with Interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface AcosWatch {
    brand: string;
    modal: string;
  }

  const poorDeveloper: Developer<AcosWatch> = {
    name: "Monjur",
    computer: {
      brand: "HP",
      model: "X-23",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Acos",
      modal: "Kw54",
    },
  };

  interface AppleWatch {
    brand: string;
    modal: string;
    display: string;
    heartTracking: boolean;
  }
  interface YamahaBike {
    name: string;
    model: number;
  }
  const RichDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Monjur Mazumder",
    computer: {
      brand: "MAC",
      model: "M-34",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Apple",
      modal: "Kw54",
      display: "4K",
      heartTracking: true,
    },
    bike: {
      name: "Yamaha",
      model: 2001,
    },
  };

  //
}
