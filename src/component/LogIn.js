import * as React from "react";
import { Field, reduxForm } from "redux-form";

import {
  Button,
  Container,
  Grid,
  Link,
  Typography,
  CssBaseline,
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import { InputTextField } from "./InputTextField";
import { CheckboxField } from "./CheckboxField";

import { validate } from "../validators/validatorsLogIn";
import { useStyles } from "../style/useStyle";

const LogInForm = ({ handleSubmit, ...props }) => {
  const [typeFieldPassword, setTypeFieldPassword] = React.useState("password");
  // hook state type setting for password
  const [visibilityPassword, setVisibilityPassword] = React.useState(false);
  //hook state setting eye visibility for password

  const VisibilityPassword = () => {
    if (typeFieldPassword === "password") {
      setTypeFieldPassword("text");
      setVisibilityPassword(true);
    } else {
      setTypeFieldPassword("password");
      setVisibilityPassword(false);
    }
  };

  const classes = useStyles();
  // hook accepting properties to be used for "interpolation" in the stylesheet
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={1}>
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
                name={"password"}
                id={"password"}
                label={"password"}
                component={InputTextField}
                type={typeFieldPassword}
                title={"enter a strong password"}
              />
            </Grid>
            <Grid item xs={2} sm={2}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                className={classes.buttonPass}
                onClick={VisibilityPassword}
              >
                {visibilityPassword ? <Visibility /> : <VisibilityOff />}
              </Button>
            </Grid>
            <Field
              color="primary"
              name={"remember_me"}
              id={"remember_me"}
              label={"Remember me"}
              component={CheckboxField}
              type={"checkbox"}
            />
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
              <Link onClick={props.props.handleClickOpenSignUp} variant="body2">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}; // Form for login

export const LogIn = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }; // Function that outputs data from the form to the console
  return (
    <>
      <LogInReduxForm onSubmit={onSubmit} props={props} />
    </>
  );
}; //The main component of LogIn which returns LogInReduxForm

const LogInReduxForm = reduxForm({
  form: "logIn", // a unique name for the form
  validate, //  validation function given to redux-form
})(LogInForm); //HOC
//function that takes configuration object and returns a new function;
