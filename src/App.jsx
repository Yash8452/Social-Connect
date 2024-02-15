import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
const App = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<p>Page Not Found (Error 404!)</p>} />
    </Routes>
  );
};

export default App;
