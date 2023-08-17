import Box from "@mui/material/Box";
import StickyFooter from "./components/StickyFooter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppGlobalProvider } from "./components/AppGlobalProvider";
import { AppBar } from "./components/AppBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, Toolbar } from "@mui/material";
import { FamilyMemoList } from "./pages/FamilyMemoList";
import AppDrawer from "./components/AppDrawer/AppDrawer";
import { MdViewPage } from "./pages/MdViewPage";

export default function App() {
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppGlobalProvider>
        <Router>
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

              <Routes>
                <Route path="/" element={<FamilyMemoList />} />
                <Route path="/md/*" element={<MdViewPage />} />
                <Route path="/mem/:tag" element={<FamilyMemoList />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </AppGlobalProvider>
      <StickyFooter />
    </ThemeProvider>
  );
}
