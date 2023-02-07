import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/cadastro" element={<RegisterPage/>} />
      <Route path="/" element={<ProtectedRoutes/>}>
        <Route path="home" element={<Homepage/>} />
      </Route>
    </Routes>
  );
}

export default RoutesMain;
