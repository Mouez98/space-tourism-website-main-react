import { useState } from "react";
import DestinationDetails from "./DestinationDetails";

const Destination = ({ destinations }) => {
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
        <DestinationDetails
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

export default Destination;
