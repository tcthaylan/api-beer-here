// (0?[1-9]{2})*\D*(9?)\D?(\d{4})+\D?(\d{4})\b
const validadePhoneNumber = (phoneNumber) => {
  const reg = /(0?[1-9]{2})*\D*(9?)\D?(\d{4})+\D?(\d{4})\b/g;
  if (reg.test(phoneNumber) === true) return true;
  return false;
};

export default validadePhoneNumber;