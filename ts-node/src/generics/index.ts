export const printObj = (argument: any) => {
  console.log(argument);
};

export const genericFunction = <T>(argument: T): T => {
  return argument;
};
