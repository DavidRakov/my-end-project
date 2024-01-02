import * as yup from "yup"

const signinValidation = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,20}$/,
      "Password must contain 8 characters one uppercase one lowercase and one special case character"
    )
    .required("Password is required")
});

export default signinValidation;
