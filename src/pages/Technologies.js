
import { useLocation } from "react-router-dom";
import Technology from "../components/technology/Technology";

import "../components/technology/Technology.css";

const Technologies = ({ technology }) => {
  const location = useLocation();
  const cssClass = location.pathname.slice(1);

  return (
    <section className={cssClass}>
      <h2 className="title">
        <span>03</span> Meet your crew
      </h2>
     <Technology technology={technology} />
    </section>
  );
};

export default Technologies;
