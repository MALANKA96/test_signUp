import { Checkbox, FormControlLabel } from "@material-ui/core";

export const CheckboxField = ({ input, ...props }) => {
  //component returning checkbox
  return (
    <FormControlLabel {...props} control={<Checkbox {...input} {...props} />} />
  );
};
