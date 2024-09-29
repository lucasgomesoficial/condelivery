import { AuthProvider } from "./context/authProvider";
import { Navigation } from "./routes/navigation";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </BrowserRouter>
  );
}
