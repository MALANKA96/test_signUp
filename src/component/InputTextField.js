import TextField from "@material-ui/core/TextField";

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
  
  export default InputTextField;