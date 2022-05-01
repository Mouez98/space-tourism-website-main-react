import { useState } from "react";
import { useLocation } from "react-router-dom";

import "../components/crew/Crew.css";

const Crew = ({ crew }) => {
  const [curMemberIndex, setCurMemberIndex] = useState(0);

  const location = useLocation();
  const cssClass = location.pathname.slice(1);
  const { name, role, bio, images } = crew[curMemberIndex];

  function linkClickHandler(index, name) {
   setCurMemberIndex(index)
  }

  return (
    <section className={cssClass}>
      <h2 className="title">
        <span>02</span> Meet your crew
      </h2>
      <article>
        <div className="image-container">
          <img src={images.png} alt={name} />
          <hr />
        </div>
        <div className="details">
          <ul className="list">
            {crew.map((crewMember, index) => (
              <li
                key={crewMember.name}
                className={curMemberIndex === index ? 'active' : ''}
                onClick={()=> linkClickHandler(index )}
                
              ></li>
            ))}
          </ul>
          <h3 className="role">{role}</h3>
          <h3 className="crew-member">{name}</h3>
          <p className="description">{bio}</p>
        </div>
      </article>
    </section>
  );
};

export default Crew;
