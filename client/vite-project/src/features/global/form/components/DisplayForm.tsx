import { FC } from "react";
import { Control, FieldErrors } from "react-hook-form";
import { FormValues } from "../types/FieldProps";
import ControlledPasswordField from "./PasswordField";
import ControlledTextField from "./TextField";
import splitCamelCase from "../utils/splitCamelCase";

export type DisplayFormContextProps = {
  formValues: string[];
  control: Control<FormValues, unknown>;
  errors: FieldErrors;
};

const DisplayFormContext: FC<DisplayFormContextProps> = ({
  formValues,
  control,
  errors,
}) => {
  return formValues.map((value, i) => {
    const label = splitCamelCase(value);
    if (value.toLocaleLowerCase().includes("password"))
      return (
        <ControlledPasswordField
          key={i}
          control={control}
          errors={errors}
          name={value}
          label={label}
        />
      );
    return (
      <ControlledTextField
        key={i}
        control={control}
        errors={errors}
        name={value}
        label={label}
      />
    );
  });
};

export default DisplayFormContext;
