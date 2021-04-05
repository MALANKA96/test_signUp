import * as React from "react";
import { Field, reduxForm } from "redux-form";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

import InputTextField from "./InputTextField";
import CheckboxField from "./CheckboxField";

import validate from "../validators/validatorsLogIn";
import useStyles from "../style/useStyle";

const LogInForm = ({ handleSubmit, ...props }) => {
  const [typeFieldPassword, setTypeFieldPassword] = React.useState("password");
  const [visibilityPassword, setVisibilityPassword] = React.useState(false);

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
                {visibilityPassword && <VisibilityIcon />}
                {!visibilityPassword && <VisibilityOffIcon />}
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
};

const LogIn = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <LogInReduxForm onSubmit={onSubmit} props={props} />
    </>
  );
};

const LogInReduxForm = reduxForm({
  form: "singIp",
  validate,
})(LogInForm);

export default LogIn;
