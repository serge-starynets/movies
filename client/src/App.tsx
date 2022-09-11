import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

import Navigation from "./components/navigation";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Recommend from "./pages/Recommend";

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="recommend" element={<Recommend/>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
