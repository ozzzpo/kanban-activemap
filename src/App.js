import "./App.css";
import service from "./api/auth.service";
import Authorization from "./pages/Authorization/Authorization";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./router/AuthWrapper";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='login' element={<Authorization />} />
          <Route path='*' element={<Authorization />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
