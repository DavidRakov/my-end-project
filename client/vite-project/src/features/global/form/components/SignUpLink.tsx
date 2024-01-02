import { Grid, Link } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
type SignInUpLinkProps = {
  text: string;
};
const SignInUpLink: FC<SignInUpLinkProps> = ({ text }) => {
  const navigate = useNavigate();
  const linkText =
    text === "signin"
      ? "Already have an account? Sign In"
      : "Don't have an account? Sign Up";
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <Link
            variant="body2"
            onClick={() => {
              navigate(`/store/${text}`);
            }}
          >
            {linkText}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default SignInUpLink;
