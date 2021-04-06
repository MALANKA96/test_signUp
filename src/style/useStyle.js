import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    /* backgroundColor: ( "yellowgreen" ), */
    width: "100vw",
    height: "100vh",
    margin: "0",
    maxWidth: "100vw"

  },
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
  buttonsLog: {
    width: "100%",
    marginTop: theme.spacing(10),
    margin: "0 auto",
  },
  buttonNigthTheme: {
    marginTop: theme.spacing(10),
  },
  buttonLogIn: {
    marginTop: theme.spacing(3),
    width: "100%",
  },
  buttonSignUp: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttonPass: {
    height: "56px",
    margin: "0",
    minWidth: "30px",
    padding: "0",
    width: "100%",
  },
  weak: {
    textAlign: "center",
  },
  strong: {
    textAlign: "center",
  },
  complexityPassword: {
    display: "flex",
  },
}));

export default useStyles;
