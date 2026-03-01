import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Success from "./pages/Success";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/success" element={<Success />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}