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
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import PassStrong from "./PassStrong";

const validate = (values) => {
  const errors = {};
  if (!values.login) {
    errors.login = "create a login";
  } else if (values.login.length < 4) {
    errors.login = "login must be more than 4 characters";
  } else if (values.login.length > 15) {
    errors.login = "login must be 15 characters or less";
  } else if (!/^[\w]{4,}$/i.test(values.login)) {
    errors.login =
      "login should not contain spaces and other special characters. use: az, AZ, 0-9";
  }
  if (!values.email) {
    errors.email =
      "enter a valid email address to which a confirmation email will be sent";
  } else if (/\s/.test(values.email)) {
    errors.email = "don't use space";
  } else if (
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "invalid email address";
  }
  if (!values.pass) {
    errors.pass = "сreate a password";
  } else if (/\s/.test(values.pass)) {
    errors.pass = "don't use space";
  } else if (values.pass.length < 8) {
    errors.pass = "password is short, minimum number of characters 8";
  } else if (!/(?=.*[A-Z])/.test(values.pass)) {
    errors.pass = "at least one uppercase is required";
  } else if (!/(?=.*[a-z])/.test(values.pass)) {
    errors.pass = "at least one lower case is required";
  } else if (!/(?=.*[!@#$%^&*()_=+{}:<.>-])/.test(values.pass)) {
    errors.pass = "at least one special character is required";
  } else if (!/(?=.*[0-9])/.test(values.pass)) {
    errors.pass = "at least one number is required";
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
  buttonPass: {
    height: "56px",
    margin: "0",
    minWidth: "42px",
    padding: "0",
    width: "100%",
  },
  weak: {
    textAlign: "center",
  },
  strog: {
    textAlign: "center",
  },
  strongPass: {
    display: "flex",
  },
}));

const SignUpForm = ({ handleSubmit }) => {
  const [typeFieldPass, setTypeFieldPass] = React.useState("password");
  const [visibilityPass, setVisibilityPass] = React.useState(false);
  const [visibilityStrongPass, setVisibilityStrongPass] = React.useState(false);

  let [scoreStrongPass, setScoreStrongPass] = React.useState(0);

  const valid1 = /(?=.*[a-z])/;
  const valid2 = /(?=.*[A-Z])/;
  const valid3 = /(?=.*[!@#$%^&*()_=+{}:<.>-])/;
  const valid4 = /(?=.*[0-9])/;

  const StrongePass = (e) => {
    setVisibilityStrongPass(true);
    let array = e.target.value.split("");
    let isArray1 = array.some((i) => {
      return valid1.test(i);
    });
    let isArray2 = array.some((i) => {
      return valid2.test(i);
    });
    let isArray3 = array.some((i) => {
      return valid3.test(i);
    });
    let isArray4 = array.some((i) => {
      return valid4.test(i);
    });
    if (isArray1 && isArray2 && isArray3 && isArray4) setScoreStrongPass(4);
    if (!isArray1 && !isArray2 && !isArray3 && !isArray4) setScoreStrongPass(0);

    if (!isArray1 && isArray2 && isArray3 && isArray4) setScoreStrongPass(3);
    if (isArray1 && !isArray2 && isArray3 && isArray4) setScoreStrongPass(3);
    if (isArray1 && isArray2 && !isArray3 && isArray4) setScoreStrongPass(3);
    if (isArray1 && isArray2 && isArray3 && !isArray4) setScoreStrongPass(3);

    if (!isArray1 && !isArray2 && isArray3 && isArray4) setScoreStrongPass(2);
    if (!isArray1 && isArray2 && !isArray3 && isArray4) setScoreStrongPass(2);
    if (!isArray1 && isArray2 && isArray3 && !isArray4) setScoreStrongPass(2);
    if (isArray1 && !isArray2 && !isArray3 && isArray4) setScoreStrongPass(2);
    if (isArray1 && !isArray2 && isArray3 && !isArray4) setScoreStrongPass(2);
    if (isArray1 && isArray2 && !isArray3 && !isArray4) setScoreStrongPass(2);

    if (!isArray1 && !isArray2 && !isArray3 && isArray4) setScoreStrongPass(1);
    if (!isArray1 && !isArray2 && isArray3 && !isArray4) setScoreStrongPass(1);
    if (!isArray1 && isArray2 && !isArray3 && !isArray4) setScoreStrongPass(1);
    if (isArray1 && !isArray2 && !isArray3 && !isArray4) setScoreStrongPass(1);

    if (e.target.value === "") {
      setScoreStrongPass(0);
      setVisibilityStrongPass(false);
    }
  };

  const VisibilityPass = () => {
    if (typeFieldPass === "password") {
      setTypeFieldPass("text");
      setVisibilityPass(true);
    } else {
      setTypeFieldPass("password");
      setVisibilityPass(false);
    }
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={1}>
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

            <Grid item xs={10} sm={10}>
              <Field
                placeholder={"password"}
                name={"pass"}
                id={"password"}
                label={"password"}
                component={InputTextField}
                type={typeFieldPass}
                title={"enter a strong password"}
                onChange={StrongePass}
              />
            </Grid>
            <Grid item xs={2} sm={2}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                className={classes.buttonPass}
                onClick={VisibilityPass}
              >
                {visibilityPass && <VisibilityIcon />}
                {!visibilityPass && <VisibilityOffIcon />}
              </Button>
            </Grid>
            {visibilityStrongPass && (
              <Grid item xs={12} className={classes.strongPass}>
                <Grid item xs={2} className={classes.weak}>
                  weak
                </Grid>
                <Grid item xs={8}>
                  <PassStrong scoreStrongPass={scoreStrongPass} />
                </Grid>
                <Grid item xs={2} className={classes.strong}>
                  strong
                </Grid>
              </Grid>
            )}

            <Grid item xs={12}>
              <Field
                placeholder={"confirm password"}
                name={"c_pass"}
                id={"c_pass"}
                label={"confirm password"}
                component={InputTextField}
                type={typeFieldPass}
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
