import { FC, useState } from "react";

import { SignUp } from "./component/SignUp";
import { LogIn } from "./component/LogIn";

import { Provider } from "react-redux";
import { store } from "./store/store";
import {
  Button,
  Container,
  Grid,
  Dialog,
  createMuiTheme,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import { Brightness7, Brightness4 } from "@material-ui/icons";
import { green, indigo } from "@material-ui/core/colors";

import { useStyles } from "./style/useStyle";


export const App:FC = () => {
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);
  //hook state opening Dialog Sign up
  const [openLogIn, setOpenLogIn] = useState<boolean>(false);
  //hook state opening Dialog Log in
  const [nightTheme, setNightTheme] = useState<boolean>(true);
  //hook state night mode
  const handleClickOpenSignUp = ():void => {
    setOpenLogIn(false);
    setOpenSignUp(true);
  };
  const handleClickOpenLogIn = ():void => {
    setOpenLogIn(true);
    setOpenSignUp(false);
  };

  const handleClose = ():void => {
    setOpenSignUp(false);
    setOpenLogIn(false);
  };

  const handleNightTheme = ():void => {
    nightTheme ? setNightTheme(false) : setNightTheme(true);
  };

  const myThemeNigth = createMuiTheme({
    palette: {
      type: "dark",
      primary: green,
    },
  });
  const myThemeLigth = createMuiTheme({
    palette: {
      primary: indigo,
    },
  });

  const classes = useStyles();
  // hook accepting properties to be used for "interpolation" in the stylesheet.
  return (
    <Provider store={store}>
      <ThemeProvider theme={nightTheme ? myThemeNigth : myThemeLigth}>
        <Paper className={classes.main}>
          <Container /* component="main" */ maxWidth="xs">
            <Grid item xs={6} className={classes.buttonsLog}>
              <Button
                className={classes.buttonNigthTheme}
                onClick={handleNightTheme}
              >
                {nightTheme ? <Brightness7 /> : <Brightness4 />}
              </Button>
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
        </Paper>
      </ThemeProvider>
    </Provider>
  );
};

function SignUpDialog(props: any) {
  //modal window on the form Sign up
  const { onClose, open } = props;
  const handleClose = ():void => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="dialog_signUp" open={open}>
      <SignUp {...props} />
    </Dialog>
  );
}

function LogInDialog(props : any) {
  //modal window on the form Log in
  const { onClose, open } = props;
  const handleClose = ():void => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="dialog_logIn" open={open}>
      <LogIn {...props} />
    </Dialog>
  );
}
