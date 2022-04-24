import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Crew from "../pages/Crew";
import Technolgy from "../pages/Technolgy";
import Destination from "../pages/Destination";

import { LinksContext } from "../store/context-links";


import SharedLayout from "../pages/SharedLayout";

function Layout() {
    const dataCtx = useContext(LinksContext)

    const {destinations, crew, technology} = dataCtx
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}/>
        <Route path="/destinations" element={<Destination destinations={destinations} />} />
        <Route path="/crew" element={<Crew  crew={crew}/>} />
        <Route path="/technology" element={<Technolgy  technology={technology}/>} />
      </Route>
    </Routes>
  );
}

export default Layout;