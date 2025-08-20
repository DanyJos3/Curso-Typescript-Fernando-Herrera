namespace Validations {
  const validateName = (name: string): boolean => {
    return name.length > 2;
  };

  const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };
}
