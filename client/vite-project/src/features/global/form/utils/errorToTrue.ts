import { FieldError } from "react-hook-form";

const errorToTrue = (err: FieldError | undefined) =>
  err ? { error: true } : { error: false };

export default errorToTrue;
