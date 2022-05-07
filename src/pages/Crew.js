import { useLocation } from "react-router-dom";

import CrewMember from "../components/crew/CrewMember";
import "../components/crew/Crew.css";

const Crew = ({ crew }) => {

  const location = useLocation();
  const cssClass = location.pathname.slice(1);
 

  return (
    <section className={cssClass}>
      <h2 className="title">
        <span>02</span> Meet your crew
      </h2>
    <CrewMember crew={crew}/>

    </section>
  );
};

export default Crew;
