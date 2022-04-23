import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { LinksContext } from "../store/context-links";

const Technology = () => {
  const linksCtx = useContext(LinksContext);
  const location = useLocation();
  const currentPage = location.pathname.slice(1);
  console.log(location);
  console.log(linksCtx);
  console.log(linksCtx.currentPage);


  return (
    <section className={currentPage}>
      <h2>{currentPage}</h2>
      <p>{}</p>
    </section>
  );
};

export default Technology;
