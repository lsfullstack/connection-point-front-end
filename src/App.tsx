import Global from "./styles/global";
import Routes from "./routes";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Global/>
      <Routes/>
    </AuthProvider>
  );
}

export default App;
