import { Checkbox, TextField, FormControlLabel } from "@material-ui/core";

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
