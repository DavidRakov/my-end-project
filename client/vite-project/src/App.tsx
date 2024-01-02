import "./App.css";
// import Header from "./features/layout/Header/Header";
// import RouterDOM from "./features/router/RouterDOM";
// import Footer from "./features/layout/Footer";
import { Box, Container } from "@mui/material";

const App = () => {
  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {/* <Header /> */}
        <Box
          className="product-grid"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "90%",
            justifyContent: "center",
          }}
        >
          hii
          {/* <RouterDOM /> */}
        </Box>
        {/* <Footer /> */}
      </Container>
    </>
  );
};

export default App;
