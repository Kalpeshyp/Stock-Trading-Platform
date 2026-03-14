import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/Home";
import HomePage from "./landing_page/home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
