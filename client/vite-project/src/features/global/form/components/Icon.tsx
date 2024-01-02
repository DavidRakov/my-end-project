import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FC } from "react";

type IconProps = {
  text: string;
};
const Icon: FC<IconProps> = ({ text }) => {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} data-testid="AvatatIcon">
        <LockOutlinedIcon data-testid="lock-outlined-icon" />
      </Avatar>
      <Typography component={"h1"}>{text}</Typography>
    </>
  );
};

export default Icon;
