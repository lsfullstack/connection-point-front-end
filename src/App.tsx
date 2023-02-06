import Global from "./styles/global";
import Routes from "./routes";
import AuthProvider from "./contexts/AuthContext";
import HomeProvider from "./contexts/HomeContext";

function App() {
  return (
    <AuthProvider>
      <HomeProvider>
        <Global/>
        <Routes/>
      </HomeProvider>
    </AuthProvider>
  );
}

export default App;
