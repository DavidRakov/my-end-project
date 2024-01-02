import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { FC } from "react";

type PasswordVisibilityToggleProps = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const PasswordVisibilityToggle: FC<PasswordVisibilityToggleProps> = ({
  setShowPassword,
  showPassword,
}) => {
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
};

export default PasswordVisibilityToggle;
