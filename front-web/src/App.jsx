import { AuthProvider } from "./context/authProvider";
import { DataProvider } from "./context/dataProvider";
import { Navigation } from "./routes/navigation";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <Navigation />
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
