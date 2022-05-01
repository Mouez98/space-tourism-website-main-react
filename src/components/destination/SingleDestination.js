import { useState } from "react";
import Details from "./Details";

const SingleDestination = ({ destinations }) => {
  const [curDestinationIndex, setCurDestinationIndex] = useState(0);
  const { name, description, distance, travel, images } =
    destinations[curDestinationIndex];

    function linkClickHandler(index) {
      setCurDestinationIndex(index)
  }

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
          index={curDestinationIndex}
          setCurDestination={linkClickHandler}
          destinations={destinations}
        />
    </article>
  );
};

export default SingleDestination;
