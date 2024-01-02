import * as yup from "yup";

const signupValidation = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/,
      "Password must contain 8 characters one uppercase one lowercase and one special case character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Confirm password is required"),
  initialPassword: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/,
      "initial password must contain 8 characters one uppercase one lowercase and one special case character"
    )
    .required("initial password is required"),
});

export default signupValidation;
