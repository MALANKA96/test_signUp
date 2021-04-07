import {TextField} from "@material-ui/core";

export const InputTextField = ({ input, meta, ...props }) => {
  //a component that returns an input field
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

