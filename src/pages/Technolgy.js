import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { LinksContext } from "../store/context-links";

import launch from "../assets/design/technology/image-launch-vehicle-landscape.jpg";

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
        <img src={launch} alt="moon" />
        <div className="details">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <h3 className="header">The terminolgy</h3>
          <h3 className="header">Launch vehicle</h3>
          <p className="description">
          "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
          </p>
        </div>
      </article>
    </section>
  );
};

export default Crew;

