import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Sport from "./pages/sport";
import SportHome from "./pages/sport/home";
import Register from "./pages/register";
import LoginPage from "./pages/login";

function App() {
  return (
    <div className="bg-background text-white h-screen text-sm">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/sport" element={<Sport />}>
          <Route path="/sport" element={<SportHome />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
