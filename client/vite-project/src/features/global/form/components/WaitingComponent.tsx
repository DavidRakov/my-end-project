import { Box, CssBaseline } from "@mui/material";
import { formStyle } from "../styles/formStyle";

const SpinnerComponent = () => {
  return (
    <Box sx={formStyle} data-testid="test-id">
      <CssBaseline />
      <Box
        component="img"
        src="https://i.gifer.com/VZvw.gif"
        width={45}
        sx={{ backgroundColor: "transparent" }}
      />
    </Box>
  );
};

export default SpinnerComponent;
