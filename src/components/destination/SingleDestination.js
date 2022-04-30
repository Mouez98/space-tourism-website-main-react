import { useState } from "react";
import Details from "./Details";

const SingleDestination = ({ destinations }) => {
  const [curDestinationName, setCurDestinationName] = useState('')
  const [curDestinationIndex, setCurDestinationIndex] = useState(0);
  const { name, description, distance, travel, images } =
    destinations[curDestinationIndex];

    function linkClickHandler(index, name) {
      setCurDestinationIndex(index)
      setCurDestinationName(name)
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
          setCurDestination={linkClickHandler.bind(null, 0 , '')}
          destinations={destinations}
        />
    </article>
  );
};

export default SingleDestination;
