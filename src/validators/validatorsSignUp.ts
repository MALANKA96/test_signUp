type valuesType = {
   confirm_password: string
   email: string
   login: string
   password: string
}

export const validate = (values: valuesType) => {
  const errors = {};
  validationLogin(values, errors);
  validationEmail(values, errors);
  validationPassword(values, errors);
  validationConfirmPassword(values, errors); 
  return errors;
};

const validationLogin = (values: { login: string; }, errors: { login?: string; }) => {
  if (!values.login) {
    errors.login = "create a login";
    return errors;
  } else {
switch (true) {
  case values.login.length < 4 :
    return errors.login ="login must be more than 4 characters"
  case values.login.length > 15 :
    return  errors.login ="login must be 15 characters or less";
  case !/^[\w]{0,}$/i.test(values.login) :
    return errors.login ="login should not contain spaces and other special characters. use: az, AZ, 0-9";
  default:
    break;
}

    return errors;
  }
};
const validationEmail = (values: { email: string; }, errors: { email?: string; }) => {
  if (!values.email) {
    errors.email =
      "enter a valid email address to which a confirmation email will be sent";
  } else if (
    !/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "invalid email address";
  }
  return errors;
}; 
 const validationPassword = (values: { password: string; }, errors: { password?: string; }) => {
   let valuePassword = values.password; 
  if (!valuePassword) {
    errors.password = "сreate a password";
    return errors;
  } else {
    switch (true) {
      case /\s/.test(valuePassword):
        return errors.password = "don't use space"
      case /(?=.*[А-я])/.test(valuePassword) :
        return  errors.password = "do not use letters ая, АЯ"
      case valuePassword.length < 8 :
        return errors.password ="password is short, minimum number of characters 8";
      case !/(?=.*[A-Z])/.test(valuePassword) :
        return errors.password ="at least one uppercase is required";
      case !/(?=.*[a-z])/.test(valuePassword):
        return errors.password ="at least one lower case is required";
      case !/(?=.*[!@#$%^&*()_=+{}:<.>-])/.test(valuePassword):
        return errors.password ="at least one special character is required ! @ # $ % ^ & * ( ) _ = + { } : < . > -";
      case !/(?=.*[0-9])/.test(valuePassword):
        return errors.password ="at least one number is required";
      default:
        break;
    }
    }
    return errors;
}; 
 const validationConfirmPassword = (
   values: { password: string; confirm_password: string; }, 
   errors: { confirm_password?: string; }) => {
    if (!values.confirm_password) {
    errors.confirm_password = "enter confirm password";
    return errors;
  } else {

    switch (true) {
      case values.confirm_password && values.confirm_password !== values.password:
        return errors.confirm_password = "password confirmation doesn't match"
      case values.confirm_password.length < 1 :
        return  errors.confirm_password = "password confirmation doesn't match"
  
      default:
        break;
    }
    return errors;
  }
}; 


