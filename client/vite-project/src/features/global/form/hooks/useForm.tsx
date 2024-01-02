import { SubmitHandler, useForm as useFormHook } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValues } from "../types/FieldProps";
import { AnyObjectSchema } from "yup";

const useForm = (
  schema: AnyObjectSchema,
  onSubmit: SubmitHandler<FormValues>
) => {
  const { control, handleSubmit, formState } = useFormHook<FormValues>({
    mode: "onChange",
    resolver: yupResolver<FormValues>(schema),
  });

  return {
    handleSubmit: handleSubmit(onSubmit),
    control,
    formState,
  };
};

export default useForm;
