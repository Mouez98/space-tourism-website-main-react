import { useState } from "react";

const SingleDestination = ({ destinations }) => {
  const [curDestination, setCurDestination] = useState(0);
  const { name, description, distance, travel, images } =
    destinations[curDestination];

  return (
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
          <p>avg. distance</p>
          <h3>{distance}</h3>
        </div>
        <div>
          <p>est. Travel time</p>
          <h3>{travel}</h3>
        </div>
      </div>
    </article>
  );
};

export default SingleDestination;
