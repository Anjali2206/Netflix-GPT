export const checkValidate = (email, password, confirmPassword) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  if (confirmPassword !== null) {
    if (password !== confirmPassword) return "Password not Matched";
    const isConfirmPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        confirmPassword
      );
    if (!isConfirmPasswordValid) return "Confirm Password is not valid";
  }

  return null;
};
