const validate = (values) => {
  const errors = {};
  validationLogin(values, errors);
  validationEmail(values, errors);
  validationPassword(values, errors);
  validationConfirmPassword(values, errors);
  return errors;
};

const validationLogin = (values, errors) => {
  let valueLogin = values.login;

  if (!valueLogin) {
    errors.login = "create a login";
    return errors;
  } else {
    let lengthValueLogin = valueLogin.length;

    const objectValidationLogin = {
      [lengthValueLogin < 4]: "login must be more than 4 characters",
      [lengthValueLogin > 15]: "login must be 15 characters or less",
      [!/^[\w]{0,}$/i.test(
        valueLogin
      )]: "login should not contain spaces and other special characters. use: az, AZ, 0-9",
    };

    for (const [key, value] of Object.entries(objectValidationLogin)) {
      if (key === "true") {
        return (errors.login = value);
      }
    }
    return errors;
  }
};
const validationEmail = (values, errors) => {
  if (!values.email) {
    errors.email =
      "enter a valid email address to which a confirmation email will be sent";
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "invalid email address";
  }
  return errors;
};
const validationPassword = (values, errors) => {
  let valuePassword = values.password;

  if (!valuePassword) {
    errors.password = "сreate a password";
    return errors;
  } else {
    let lengthValuePassword = valuePassword.length;
    const objectValidationPassword = {
      [/\s/.test(valuePassword)]: "don't use space",
      [/(?=.*[А-я])/.test(valuePassword)]: "do not use letters ая, АЯ",
      [lengthValuePassword <
      8]: "password is short, minimum number of characters 8",
      [!/(?=.*[A-Z])/.test(
        valuePassword
      )]: "at least one uppercase is required",
      [!/(?=.*[a-z])/.test(
        valuePassword
      )]: "at least one lower case is required",
      [!/(?=.*[!@#$%^&*()_=+{}:<.>-])/.test(
        valuePassword
      )]: "at least one special character is required ! @ # $ % ^ & * ( ) _ = + { } : < . > -",
      [!/(?=.*[0-9])/.test(valuePassword)]: "at least one number is required",
    };

    for (const [key, value] of Object.entries(objectValidationPassword)) {
      if (key === "true") {
        return (errors.password = value);
      }
    }
    return errors;
  }
};
const validationConfirmPassword = (values, errors) => {
  let valuePassword = values.password;
  let valueConfirmPassword = values.confirm_password;

  if (!valueConfirmPassword) {
    errors.confirm_password = "enter confirm password";
    return errors;
  } else {
    let lengthValueConfirmPassword = valueConfirmPassword.length;
    const objectValidationConfirmPassword = {
      [valueConfirmPassword &&
      valueConfirmPassword !==
        valuePassword]: "password confirmation doesn't match",
      [lengthValueConfirmPassword < 1]: "password confirmation doesn't match",
    };

    for (const [key, value] of Object.entries(
      objectValidationConfirmPassword
    )) {
      if (key === "true") {
        return (errors.confirm_password = value);
      }
    }
    return errors;
  }
};

export default validate;
