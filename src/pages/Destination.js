import { useState } from "react";
import { useLocation } from "react-router-dom";

import '../components/destination/Destinations.css'

const Destination = ({ destinations }) => {
  const [curDestination, setCurDestination] = useState(0);
  const location = useLocation();
  const cssClass = location.pathname.slice(1);

  const { name, description, distance, travel, images } =
    destinations[curDestination];

  return (
    <section className={cssClass}>
      <h2 className="title">
        <span>01</span> Pick Up Your destinations
      </h2>

      <article>
        <div className="image-container">
          <img src={images.png} alt={name} />
        </div>

        <div className="details">
          <ul className="destinations-list">
            {destinations
              ? destinations.map((des, index) => (
                  <li key={des.name} onClick={() => setCurDestination(index)}>
                    {des.name}
                  </li>
                ))
              : null}
          </ul>
          <h3 className="destination-name">{name}</h3>
          <p className="description">{description}</p>
        </div>
        <hr />

        <div className="single-destination-details">
          <div>
            <p>distance</p>
            <h3>{distance}</h3>
          </div>
          <div>
            <p>Travel</p>
            <h3>{travel}</h3>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Destination;
