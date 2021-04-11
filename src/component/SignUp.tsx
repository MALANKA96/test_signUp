import { FC, useState } from "react";
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

import { PasswordСomplexity } from "./PasswordСomplexity";
import { InputTextField } from "./InputTextField";
import { validate } from "../validators/validatorsSignUp";
import { useStyles } from "../style/useStyle";

const SignUpForm:FC = (props: any) => {
  const [typeFieldPassword, setTypeFieldPassword] = useState<string>("password");
  // hook state type setting for password
  const [visibilityPassword, setVisibilityPassword] = useState<boolean>(false);
  //hook state setting eye visibility for password
  const [
    visibilityСomplexityPassword,
    setVisibilityСomplexityPassword,
  ] = useState<boolean>(false);
  //hook visibility slider for password сomplexity
  let [scoreСomplexityPassword, setScoreСomplexityPassword] = useState<number>(0);
  //hook state to change points(score) for password complexity

  const validationForLowerLetters = /(?=.*[a-z])/;
  const validationForUpperLetters = /(?=.*[A-Z])/;
  const validationForSpecialCharacter = /(?=.*[!@#$%^&*()_=+{}:<.>-])/;
  const validationForNumber = /(?=.*[0-9])/;

  const onPasswordСomplexity = (e: { target: { value: string; }; }) => {
    //examining the password complexity state
    setVisibilityСomplexityPassword(true);
    let arrayValuePassword = e.target.value.split("");
    //entering the password value into an array for verification
    let isValidForLowerLetters = arrayValuePassword.some((i: string) => {
      return validationForLowerLetters.test(i);
    });
    let isValidForUpperLetters = arrayValuePassword.some((i: string) => {
      return validationForUpperLetters.test(i);
    });
    let isValidForSpecialCharacter = arrayValuePassword.some((i: string) => {
      return validationForSpecialCharacter.test(i);
    });
    let isValidForNumber = arrayValuePassword.some((i: string) => {
      return validationForNumber.test(i);
    });

    setScoreСomplexityPassword(
      [
        isValidForLowerLetters,
        isValidForUpperLetters,
        isValidForSpecialCharacter,
        isValidForNumber,
      ].filter(Boolean).length
    ); // password complexity estimation based on validation

    if (e.target.value === "") {
      setScoreСomplexityPassword(0);
      setVisibilityСomplexityPassword(false);
    }
  };

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
  // hook accepting properties to be used for "interpolation" in the stylesheet.
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
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
                name={"password"}
                id={"password"}
                label={"password"}
                component={InputTextField}
                type={typeFieldPassword}
                title={"enter a strong password"}
                onChange={onPasswordСomplexity}
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
            {visibilityСomplexityPassword && (
              <Grid item xs={12} className={classes.complexityPassword}>
                <Grid item xs={3} className={classes.weak}>
                  weak
                </Grid>
                <Grid item xs={6}>
                  <PasswordСomplexity
                    scoreСomplexityPassword={scoreСomplexityPassword}
                  />
                </Grid>
                <Grid item xs={3} className={classes.strong}>
                  strong
                </Grid>
              </Grid>
            )}

            <Grid item xs={12}>
              <Field
                placeholder={"confirm password"}
                name={"confirm_password"}
                id={"confirm_password"}
                label={"confirm password"}
                component={InputTextField}
                type={typeFieldPassword}
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
              <Link onClick={props.handleClickOpenLogIn} variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}; // Form for login

export const SignUp = (props: any) => {
  debugger
  const onSubmit = (formData: any) => {
    console.log(formData);
  }; // Function that outputs data from the form to the console
  return (
    <>
      <SignUpReduxForm onSubmit={onSubmit} {...props} />
    </>
  );
}; //The main component of LogIn which returns SignUpReduxForm

const SignUpReduxForm = reduxForm({
  form: "singUp", // a unique name for the form
  validate, //  validation function given to redux-form
})(SignUpForm); //HOC
//function that takes configuration object and returns a new function;
