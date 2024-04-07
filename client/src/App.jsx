import { react } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Aboutus from "./components/pages/Aboutus";
import Codemake from "./components/pages/Codemake";
import Finalproduct from "./components/pages/Finalproduct";


function App() {
  

  return (
    <>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/codemake" element={<Codemake />} />
          <Route path="/finalproduct" element={<Finalproduct />} />
        </Routes>
    </>
  );
}

export default App;
