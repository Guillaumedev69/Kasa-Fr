import { BrowserRouter,Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
