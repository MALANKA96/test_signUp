import * as React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Field, reduxForm } from "redux-form";

const validate = (values, touched) => {
  const errors = {};
  if (!values.login && touched) {
    errors.login = "create a login";
  } else if (values.login.length > 15) {
    errors.login = "must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "enter a valid email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.pass) {
    errors.pass = "сreate a password";
  } else if (values.pass.length < 8) {
    errors.pass = "minimum number of characters 8";
  }
  if (values.c_pass && values.c_pass !== values.pass) {
    errors.c_pass = "password confirmation doesn't match";
  }
  if (!values.c_pass) {
    errors.c_pass = "enter confirm password";
  } else if (values.c_pass.length < 1) {
    errors.c_pass = "password confirmation doesn't match";
  }
  return errors;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpForm = ({ handleSubmit }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                placeholder={"login"}
                name={"login"}
                id={"login"}
                label={"login"}
                component={InputTextField}
                title="enter your login"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                placeholder={"email"}
                name={"email"}
                id={"email"}
                label={"email"}
                component={InputTextField}
                type={"email"}
                title={"enter your email"}
              />
            </Grid>

            <Grid item xs={12}>
              <Field
                placeholder={"password"}
                name={"pass"}
                id={"password"}
                label={"password"}
                component={InputTextField}
                type={"password"}
                title={"enter a strong password"}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                placeholder={"confirm password"}
                name={"c_pass"}
                id={"c_pass"}
                label={"confirm password"}
                component={InputTextField}
                type={"password"}
                title={"confirm password"}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const SignUpReduxForm = reduxForm({
  form: "singUp",
  validate,
})(SignUpForm);

const SignUp = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <SignUpReduxForm onSubmit={onSubmit} />
    </>
  );
};

const InputTextField = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <TextField
      {...input}
      {...props}
      autoComplete="off"
      variant="outlined"
      fullWidth
      required
      error={!!hasError}
      helperText={hasError}
    />
  );
};

export default SignUp;
