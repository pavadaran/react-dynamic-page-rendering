import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Registration from "./pages/Registration.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default App;
