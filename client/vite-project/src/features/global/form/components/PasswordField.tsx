import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useState, FC } from "react";
import { Controller, FieldError } from "react-hook-form";
import PasswordFieldProps from "../types/FieldProps";
import errorToTrue from "../utils/errorToTrue";
import ErrorMessage from "./ErrorMessage";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";

const ControlledPasswordField: FC<PasswordFieldProps> = ({
  label,
  name,
  control,
  errors,
  sx,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const error = errors[name] as FieldError;
  return (
    <>
      <FormControl fullWidth sx={sx ? sx : { mb: "1rem" }}>
        <InputLabel
          htmlFor="outlined-adornment-password"
          {...errorToTrue(error)}
          required
        >
          {label}
        </InputLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              {...errorToTrue(error)}
              required
              type={showPassword ? "text" : "password"}
              label={label}
              endAdornment={
                <PasswordVisibilityToggle
                  setShowPassword={setShowPassword}
                  showPassword={showPassword}
                />
              }
            />
          )}
        />
        {error ? <ErrorMessage errorMessage={error} /> : null}
      </FormControl>
    </>
  );
};

export default ControlledPasswordField;
