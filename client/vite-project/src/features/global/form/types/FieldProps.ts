import {
    FilledInputProps,
    InputProps,
    OutlinedInputProps,
    SxProps,
    Theme,
  } from "@mui/material";
  import { Control, FieldErrors } from "react-hook-form";
  
  export type FormValues = Record<string, unknown>;
  
  type FieldProps = {
    label: string;
    inputProps?: Partial<FilledInputProps | OutlinedInputProps | InputProps>;
    name: string;
    control: Control<FormValues, unknown>;
    errors: FieldErrors<FormValues>;
    type?: string;
    sx?:  SxProps<Theme>
  };
  
  export default FieldProps;
  