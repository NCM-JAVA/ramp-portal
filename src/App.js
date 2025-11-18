import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";

import Login from "./pages/auth/login";
// import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/notFound";
import Register from "./pages/auth/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth/login" replace />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
