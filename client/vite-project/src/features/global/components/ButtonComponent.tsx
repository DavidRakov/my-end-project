import Button from "@mui/material/Button";
import { FC } from "react";

type ButtonComponentProps = {
  variant: "contained" | "outlined" | "text";
  field: string;
  color: "info" | "inherit";
  disable: boolean;
};

const ButtonComponent: FC<ButtonComponentProps> = ({
  color,
  disable = false,
  field,
  variant,
}) => {
  return (
    <Button variant={variant} color={color} disabled={disable}>
      {field}
    </Button>
  );
};

export default ButtonComponent;
