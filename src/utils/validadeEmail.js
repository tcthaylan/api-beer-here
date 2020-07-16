const validateEmail = (email) => {
  const reg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9]+([\.][a-zA-Z0-9]+){1,5}$/;
  if (reg.test(email) === true) return true;
  return false;
};

export default validateEmail;