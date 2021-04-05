import * as React from "react";
import SignUp from "./component/SignUp";
import LogIn from "./component/LogIn";

import { Provider } from "react-redux";
import store from "./store/store";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style/useStyle";
import Dialog from "@material-ui/core/Dialog";

const App = () => {
  const [openSignUp, setOpenSignUp] = React.useState(false);
  //hook state opening Dialog Sign up
  const [openLogIn, setOpenLogIn] = React.useState(false);
  //hook state opening Dialog Log in
  const handleClickOpenSignUp = () => {
    setOpenLogIn(false);
    setOpenSignUp(true);
  };
  const handleClickOpenLogIn = () => {
    setOpenLogIn(true);
    setOpenSignUp(false);
  };

  const handleClose = () => {
    setOpenSignUp(false);
    setOpenLogIn(false);
  };

  const classes = useStyles();
  // hook accepting properties to be used for "interpolation" in the stylesheet.
  return (
    <Provider store={store}>
      <Container component="main" maxWidth="xs">
        <Grid item xs={6} className={classes.buttonsLog}>
          <Button
            type="button"
            variant="contained"
            className={classes.buttonLogIn}
            onClick={handleClickOpenLogIn}
          >
            Log in
          </Button>
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.buttonSignUp}
            onClick={handleClickOpenSignUp}
          >
            Sign Up
          </Button>
        </Grid>
        <SignUpDialog
          open={openSignUp}
          onClose={handleClose}
          handleClickOpenLogIn={handleClickOpenLogIn}
        />
        <LogInDialog
          open={openLogIn}
          onClose={handleClose}
          handleClickOpenSignUp={handleClickOpenSignUp}
        />
      </Container>
    </Provider>
  );
};

function SignUpDialog(props) {
  //modal window on the form Sign up
  
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="dialog_signUp" open={open}>
      <SignUp {...props} />
    </Dialog>
  );
}

function LogInDialog(props) {
  //modal window on the form Log in
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="dialog_logIn" open={open}>
      <LogIn {...props} />
    </Dialog>
  );
}

export default App;
