import "./styles/index.css"
import LoginRegister from "./components/LoginRegister/LoginRegister";
import Alert from "./components/Alert/Alert";
import { AlertProvider } from "./context/AlertContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

function AppContent() {
  const { user, logout } = useAuth();

  return (
    <AlertProvider>
      <Alert message={"Alerta"} type={"warning"} />
      {
        user ? (
          <h1 onClick={logout}>logueado</h1>
        ) : (
          <LoginRegister />
        )
      }
    </AlertProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
