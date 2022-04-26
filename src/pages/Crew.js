import { useState } from "react";
import { useLocation } from "react-router-dom";

const Crew = ({crew}) => {
  const [curMember, setCurMember ] = useState(0)
  const location = useLocation();
  const cssClass = location.pathname.slice(1);

  const {name,role, bio, images} = crew[curMember]

  return (
    <section className={cssClass}>
      <h2>
        <span>02</span> Meet your crew
      </h2>
      <article>
        <img src={images.png} alt={name} />
        <div className="details">
          <ul>
           
         {crew.map((crewMember,index) =>  <li key={crewMember.name} onClick={()=> setCurMember(index)}>*</li>)}
            
          </ul>
          <h3 className="header">{role}</h3>
          <h3 className="header">{name}</h3>
          <p className="description">
           {bio}
          </p>
        </div>
      </article>
    </section>
  );
};

export default Crew;
