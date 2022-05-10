import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Technology from "../components/technology/Technology";

import "../components/technology/Technology.css";

const Technologies = ({ technology }) => {
  const [localTechnology, setLocalTechnology] = useState(technology);

  const location = useLocation();
  const cssClass = location.pathname.slice(1);

  useEffect(() => {
    //Save state to local storage
    localStorage.setItem("technology", JSON.stringify(technology));

    //Get saved state
    const getSavedInLocal = JSON.parse(localStorage.getItem("technology"));

    //if there is no state set state to saved local storage
    !technology && setLocalTechnology(getSavedInLocal);
  
  }, [technology]);

  return (
    <section className={cssClass}>
      <h2 className="title">
        <span>03</span> Meet your crew
      </h2>
      <Technology technology={localTechnology} />
    </section>
  );
};

export default Technologies;
