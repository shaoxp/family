import Box from "@mui/material/Box";
import StickyFooter from "./components/StickyFooter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppGlobalProvider } from "./components/AppGlobalProvider";
import { AppBar } from "./components/AppBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, Toolbar } from "@mui/material";
import { FamilyBlogList } from "./Family/FamilyBlogList";
import AppDrawer from "./components/AppDrawer/AppDrawer";

export default function App() {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppGlobalProvider>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar />
          <AppDrawer />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Router>
              <Routes>
                <Route path="/" element={<FamilyBlogList />}></Route>
              </Routes>
            </Router>
          </Box>
        </Box>
      </AppGlobalProvider>
      <StickyFooter />
    </ThemeProvider>
  );
}
