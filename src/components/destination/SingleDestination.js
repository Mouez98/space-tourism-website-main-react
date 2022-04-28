import { useState } from "react";
import Details from "./Details";

const SingleDestination = ({ destinations }) => {
  const [curDestination, setCurDestination] = useState(0);
  const { name, description, distance, travel, images } =
    destinations[curDestination];

  return (
    <article>
      <div className="image-container">
        <img src={images.png} alt={name} />
      </div>
      <Details
        name={name}
        description={description}
        distance={distance}
        travel={travel}
        setCurDestination={setCurDestination}
        destinations={destinations}
      />
    </article>
  );
};

export default SingleDestination;
