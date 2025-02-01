import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import Add from "./pages/Add";
import Summary from "./pages/Summary";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Expenses" element={<Expenses />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Summary" element={<Summary />} />
      </Routes>
    </>
  );
}

export default App;
