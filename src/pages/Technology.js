import { useState } from "react";
import { useLocation } from "react-router-dom";


const Technology = ({technology}) => {
  const [curTechnology, setCurTechnology ] = useState(0)
  const location = useLocation();
  const cssClass = location.pathname.slice(1);


  const {name, description, images} = technology[curTechnology]


  return (
    <section className={cssClass}>
      <h2>
        <span>02</span> Meet your crew
      </h2>
      <article>
        <img src={images.portrait} alt={name} />
        <div className="details">
          <ul>
          {technology ? technology.map((des, index )=> <li key={des.name} onClick={()=>setCurTechnology(index)}>{index + 1}</li>): null }
          </ul>
          <h3 className="header">The terminolgy</h3>
          <h3 className="header">{name}</h3>
          <p className="description">
          {description}
          </p>
        </div>
      </article>
    </section>
  );
};

export default Technology;

