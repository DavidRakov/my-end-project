import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { FieldError } from "react-hook-form";
import ErrorIcon from "@mui/icons-material/Error";
type ErrorMessageProps = {
  errorMessage: FieldError | undefined;
};
const ErrorMessage: FC<ErrorMessageProps> = ({ errorMessage }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        mt: "5px",
      }}
    >
      <ErrorIcon color="error" sx={{ width: "20px" }} />
      <Typography color={"error.main"}>{errorMessage?.message}</Typography>
    </Box>
  );
};

export default ErrorMessage;
