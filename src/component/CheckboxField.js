import { Checkbox, FormControlLabel } from "@material-ui/core";

const CheckboxField = ({ input, ...props }) => {
  //component returning checkbox
  return (
    <FormControlLabel {...props} control={<Checkbox {...input} {...props} />} />
  );
};

export default CheckboxField;