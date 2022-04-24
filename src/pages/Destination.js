import { useContext, useEffect, useState} from "react";
// import { useLocation } from "react-router-dom";
// import { LinksContext } from "../store/context-links";

import Moon from "../assets/design/destination/image-moon.png";

const Destination = ({destinations}) => {
  const [curDestination, setCurDestination ] = useState(0)
  // const location = useLocation();
  // const linksCtx = useContext(LinksContext);
  // // const currentPage = linksCtx.destinations[0]
  // console.log(linksCtx.destinations[curDestination].name);
 

  // // console.log(linksCtx.currentPage);

  useEffect(()=>{},['hot'])

  return (
    <section className={'hjgvhj'}>
      <h2>
        <span>01</span> Pick Up Your destinations
      </h2>
      
      <article>
        <img src={Moon} alt="moon" />
        
        <div className="details">
          <ul>
          {destinations ? destinations.map(des => <li key={des.name}>{des.name}</li>): null }
        </ul>
          <h3 className="header">{destinations[curDestination].name}</h3>
          <p className="description">
            {destinations[curDestination].description}
          </p>
        </div>
        <hr/>
        
        <div>
            <div>
                <p>distance</p>
                <h3>{destinations[curDestination].distance}</h3>
            </div>
            <div>
                <p>Travel</p>
                <h3>{destinations[curDestination].travel}</h3>
            </div>
        </div>
      </article>
    </section>
  );
};

export default Destination;
