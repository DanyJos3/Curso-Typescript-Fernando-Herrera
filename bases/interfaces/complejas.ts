(() => {
  interface Client {
    name: string;
    age: number;
    address: Address;
  }

  interface Address {
    street: string;
    city: string;
    zipCode: string;
  }

  const client: Client = {
    name: "Daniel",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      zipCode: "12345",
    },
  };
})();
