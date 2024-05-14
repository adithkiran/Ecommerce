import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestProduct from "./components/TestProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<TestProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
