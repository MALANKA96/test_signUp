type valuesType = {
  email: string
  password: string
}

export const validate = (values: valuesType ) => {
  const errors = {};
  validationEmail(values, errors);
  validationPassword(values, errors);
  return errors;
};

const validationEmail = (values: { email: string; }, errors: { email?: string; }) => {
  if (!values.email) {
    errors.email =
      "enter your account email address";
  } else if (
    !/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "invalid email address";
  }
  return errors;
};
const validationPassword = (values:{ password: string; }, errors: { password?: string; }) => {
  if (!values.password) {
    errors.password = "enter your account password";
    return errors;
  } 
};


