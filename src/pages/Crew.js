import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { LinksContext } from "../store/context-links";

import crewMember from "../assets/design/crew/image-douglas-hurley.png";

const Crew = () => {
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  const linksCtx = useContext(LinksContext);

  console.log(linksCtx.currentPage);

  return (
    <section className={currentPage}>
      <h2>
        <span>02</span> Meet your crew
      </h2>
      <article>
        <img src={crewMember} alt="moon" />
        <div className="details">
          <ul>
            <li>°</li>
            <li>°</li>
            <li>°</li>
            <li>°</li>
          </ul>
          <h3 className="header">Commander</h3>
          <h3 className="header">douglas hurley</h3>
          <p className="description">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Crew;
