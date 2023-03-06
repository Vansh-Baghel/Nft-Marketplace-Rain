import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme.js";

import Navbar from "./component/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
