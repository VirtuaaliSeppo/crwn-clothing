import React from "react";
import { FormInputContainer, Input, InputLabel } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormInputContainer>
    <Input onChange={handleChange} {...otherProps} />
    {label ? (
      <InputLabel shrink={!!otherProps.value}>{label}</InputLabel>
    ) : null}
  </FormInputContainer>
);

export default FormInput;
