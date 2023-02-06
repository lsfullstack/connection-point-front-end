import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    )
  }
  
  return user ? <Outlet/> : <Navigate to="/login" replace/>
}

export default ProtectedRoutes;
