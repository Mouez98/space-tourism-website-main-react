import { useState, useEffect } from "react";
import TechnologyDetails from "./TechnologyDetails";

const Technology = ({ technology }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [curTechnologyIndex, setCurTechnologyIndex] = useState(0);
  let name,description,images
  

  const linkClickHandler = (index) => {
    setCurTechnologyIndex(index);
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  if(technology){
    ({ name, description, images } =  technology[curTechnologyIndex]);
 } else {
  return(<h3>Not Found</h3>)
 }
 
  return (
    <article>
      <div className="image-container">
        <img
          src={
            windowWidth && windowWidth > 899
              ? images.portrait
              : images.landscape
          }
          alt={name}
        />
      </div>
      <TechnologyDetails
        curTechnologyIndex={curTechnologyIndex}
        linkClickHandler={linkClickHandler}
        technology={technology}
        name={name}
        description={description}
      />
    </article>
  );
};

export default Technology;
