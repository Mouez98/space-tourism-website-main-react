import { useLocation } from "react-router-dom";

import Destination from "../components/destination/Destination";
import "../components/destination/Destinations.css";

const Destinations = ({ destinations }) => {
  const location = useLocation();
  const cssClass = location.pathname.slice(1);
  return (
    <section className={cssClass}>
      <h2 className="title">
        <span>01</span> Pick Up Your destinations
      </h2>
      <Destination destinations={destinations} />
    </section>
  );
};

export default Destinations;
