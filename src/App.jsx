import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import About from "./pages/About";
import MortgageCalculator from "./pages/MortgageCalculator";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/calculator" element={<MortgageCalculator />} />
        <Route path="/start" element={<StartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
