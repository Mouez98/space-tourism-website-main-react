import { useLocation } from "react-router-dom";

import SingleDestination from "../components/destination/SingleDestination";
import "../components/destination/Destinations.css";

const Destination = ({ destinations }) => {
  const location = useLocation();
  const cssClass = location.pathname.slice(1);
  return (
    <section className={cssClass}>
      <h2 className="title">
        <span>01</span> Pick Up Your destinations
      </h2>
      <SingleDestination destinations={destinations} />
    </section>
  );
};

export default Destination;
