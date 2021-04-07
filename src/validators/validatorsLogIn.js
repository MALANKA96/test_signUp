export const validate = (values) => {
  const errors = {};
  validationEmail(values, errors);
  validationPassword(values, errors);
  return errors;
};

const validationEmail = (values, errors) => {
  if (!values.email) {
    errors.email =
      "enter your account email address";
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
    errors.password = "enter your account password";
    return errors;
  } 
};


