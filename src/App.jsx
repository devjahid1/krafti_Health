import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./Pages/Home";
import Patients from "./Pages/Patients";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients/>} />
      </Route>
    </Routes>
  );
}

export default App;