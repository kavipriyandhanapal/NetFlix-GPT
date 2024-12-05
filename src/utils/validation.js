export const validation = (email, password) => {
  const Validemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const Validpassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!Validemail) return "Please Enter Valid Email Id";
  if (!Validpassword) return "Please Enter Strong Password";

  return null;
};
