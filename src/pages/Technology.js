import { useState } from "react";
import { useLocation } from "react-router-dom";

import "../components/technology/Technology.css";

const Technology = ({ technology }) => {
  const [curTechnologyIndex, setCurTechnologyIndex] = useState(0);
  const location = useLocation();
  const cssClass = location.pathname.slice(1);

  const { name, description, images } = technology[curTechnologyIndex];

  const linkClickHandler = (index) => {
    setCurTechnologyIndex(index);
  };

  return (
    <section className={cssClass}>
      <h2 className="title">
        <span>02</span> Meet your crew
      </h2>
      <article>
        <div className="image-container">
          <img src={images.landscape} alt={name} />
        </div>
        <div className="details">
          <ul className="list">
            {technology
              ? technology.map((des, index) => (
                  <li
                    key={des.name}
                    className={index === curTechnologyIndex ? "active" : ""}
                    onClick={() => linkClickHandler(index)}
                  >
                    {index + 1}
                  </li>
                ))
              : null}
          </ul>
          <h3 className="header">The terminolgy</h3>
          <h3 className="sub-header">{name}</h3>
          <p className="description">{description}</p>
        </div>
      </article>
    </section>
  );
};

export default Technology;
