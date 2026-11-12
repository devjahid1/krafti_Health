import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./Pages/Home";
import Patients from "./Pages/Patients";
import Doctors from "./Pages/Doctors";
import Features from "./Pages/Features";
import About from "./Pages/About";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
  );
}

export default App;