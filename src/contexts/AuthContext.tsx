import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface ILogin {
  username: string,
  password: string,
  rememberme: boolean,
}

interface IRegisterUser {
  name: string,
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
}

interface IAuthContext {
  signIn: Function,
  logout: Function,
  registerUser: Function,
  user: any | null,
  loading: boolean,
  setLoading: any,
  token: string,
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("@connection-point:token") || "");

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
    
      if (token) {
        try{
          api.defaults.headers.Authorization = `Bearer ${token}`;

          await api.get("/users/profile").then((res) => setUser(res.data));
          navigate("/home", { replace: true });
        } catch(error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [token]);

  const signIn = async (data: ILogin) => {
    const { username, password } = data;
    const response = await api.post("/login", {username, password});
    const token = response.data.token;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    localStorage.setItem("@connection-point:token", token);
    setToken(token);
    
  }

  const logout = async () => {
    // criar verificação com "remember-me" para limpar apenas se não estiver marcado
    localStorage.clear();
    navigate("/login", { replace: true });
  }

  const registerUser = async (data: IRegisterUser) => {
    const { name, username, email, password } = data;
    api.post("/users", { name, username, email, password });
    navigate("/login", { replace: true });
  }

  return (
    <AuthContext.Provider value={
        {
          signIn,
          logout,
          registerUser,
          user,
          loading,
          setLoading,
          token
        }
      }
    >
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;
