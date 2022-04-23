import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Technolgy from "./pages/Technolgy";
import Destination from "./pages/Destination";

import "./App.css";
// import HeaderNav from './components/HeaderNav';
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/destinations" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technolgy />} />
      </Route>
    </Routes>
  );
}

export default App;
