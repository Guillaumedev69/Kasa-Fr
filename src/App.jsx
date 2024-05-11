import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Home from "./pages/Home";
import RentalSheet from "./pages/RentalSheet";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<RentalSheet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
